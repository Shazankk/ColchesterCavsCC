// src/components/ThemeToggle.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (mode) => {
    setTheme(mode);
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => toggleTheme("light")}
        className={`px-4 py-2 ${theme === "light" ? "bg-gray-200" : ""}`}
      >
        Light
      </button>
      <button
        onClick={() => toggleTheme("dark")}
        className={`px-4 py-2 ${
          theme === "dark" ? "bg-gray-800 text-white" : ""
        }`}
      >
        Dark
      </button>
      <button
        onClick={() => toggleTheme("auto")}
        className={`px-4 py-2 ${
          theme === "auto" ? "bg-blue-500 text-white" : ""
        }`}
      >
        Auto
      </button>
    </div>
  );
}
