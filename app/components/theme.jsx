"use client"; // 클라이언트 컴포넌트임을 명시

import { useState, useEffect } from "react";

export function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);

        localStorage.setItem("theme", newTheme ? "dark" : "light");
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [isDarkMode]);

    return (
        <button
            className="
    transition-all
    duration-700
    hover:opacity-100
    hover:text-indigo-600
    hover:decoration-indigo-600
    hover:line-through decoration-solid
    "
            onClick={toggleDarkMode}
        >
            {isDarkMode ? "white" : "dark"}
        </button>
    );
}
