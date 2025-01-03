// src/context/ThemeContext.jsx
import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

// Create the ThemeContext
export const ThemeContext = createContext();

// ThemeProvider component
export function ThemeProvider({ children }) {
  // Function to get the initial theme
  const getInitialTheme = () => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) return storedTheme;
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return prefersDark ? "dark" : "light";
    }
    return "light"; // Default to light if window/localStorage is not available
  };

  // State to hold the current theme
  const [theme, setTheme] = useState(getInitialTheme);

  // Effect to update the theme and localStorage when the theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    let mediaQuery;
    let handleChange;

    if (theme === "dark") {
      root.classList.add("dark");
    } else if (theme === "light") {
      root.classList.add("light");
    } else {
      // Auto mode based on system preference
      handleChange = (e) => {
        root.classList.toggle("dark", e.matches);
        root.classList.toggle("light", !e.matches);
      };

      mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", handleChange);

      root.classList.add(mediaQuery.matches ? "dark" : "light");
    }

    localStorage.setItem("theme", theme);

    return () => {
      if (mediaQuery && handleChange) {
        mediaQuery.removeEventListener("change", handleChange);
      }
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Prop validation for the ThemeProvider
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
