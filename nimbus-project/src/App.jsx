import React, { useState, useEffect } from "react";
import "./App.scss";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className="wrapper">
      <nav className="navbar">
        <div className="logo">
          Nimbus <span>+</span>
        </div>
        <ul className="nav-links">
          <li>Features</li>
          <li>Case Studies</li>
          <li>Pricing</li>
        </ul>
        <div className="nav-actions">
          <button className="btn-text">Get a demo</button>
          <button className="btn-primary" onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>
      </nav>

      <header className="hero">
        <div className="badge">
          ✨ Generative Business Intelligence for Analysts
        </div>
        <h1>
          Empower Your Business with <span>AI-Driven Insights</span>
        </h1>
        <p>
          Nimbus harnesses the power of AI to transform your business data into
          actionable insights.
        </p>
        <div className="hero-btns">
          <button className="btn-primary">Start your free trial</button>
          <button className="btn-outline">Watch video</button>
        </div>
      </header>

      <section className="features-grid">
        <div className="feature-card">
          <div className="icon">📊</div>
          <h3>AI-Driven Forecasts</h3>
          <p>
            Harness the unmatched power of AI with Nimbus's predictive
            analytics.
          </p>
        </div>
        <div className="feature-card active">
          <div className="icon">🔗</div>
          <h3>Connect & Streamline</h3>
          <p>
            Nimbus seamlessly integrates with your favorite business tools and
            platforms.
          </p>
        </div>
        <div className="feature-card">
          <div className="icon">⚡</div>
          <h3>Instant Insights</h3>
          <p>
            In the fast-paced world of business, every second counts. Get data
            in real-time.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
