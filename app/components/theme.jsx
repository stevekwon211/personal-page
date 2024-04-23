"use client"; // 클라이언트 컴포넌트임을 명시

import { useState, useEffect } from "react";

export function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleWhiteMode = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);

        localStorage.setItem("theme", newTheme ? "light" : "dark");
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("white-mode");
        } else {
            document.body.classList.remove("white-mode");
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
            onClick={toggleWhiteMode}
        >
            {isDarkMode ? "dark" : "white"}
        </button>
    );
}
