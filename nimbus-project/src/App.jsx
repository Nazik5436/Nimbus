import React, { useState, useEffect } from "react";
import "./App.scss";

function App() {
  // Перевіряємо, чи була збережена тема раніше
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

useEffect(() => {
    // Встановлюємо атрибут для всього документа (HTML)
    document.documentElement.setAttribute("data-theme", theme);
    // Запам'ятовуємо вибір
    localStorage.setItem("theme", theme);
}, [theme]);

const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
};

return (
    <div className="container">
        <nav
            style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            }}
        >
        <h2>Nimbus+</h2>
            <button className="btn-theme" onClick={toggleTheme}>
            Перемкнути на {theme === "light" ? "Темну" : "Світлу"} тему
            </button>
        </nav>

        <header style={{ textAlign: "center", marginTop: "60px" }}>
            <h1>Empower Your Business with AI-Driven Insights</h1>
            <p>Керуй даними ефективно в обох темах!</p>
        </header>

        <div className="card">
            <h3>Це демонстраційна картка</h3>
            <p>
            Вона автоматично змінює свій фон та колір тексту завдяки CSS-змінним.
            </p>
        </div>
        </div>
    );
}

export default App;
