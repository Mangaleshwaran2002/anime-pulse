import React, { createContext, useState, useEffect } from "react";

// Create a context for the theme
const ThemeContext = createContext();

// Theme provider component
const ThemeProvider = ({ children }) => {
    // Check localStorage for saved theme when the app starts
    const savedTheme = localStorage.getItem("theme");
    
    // Use savedTheme from localStorage or default to 'light' if none is found
    const [theme, setTheme] = useState(savedTheme || "dark");

    useEffect(() => {
        // When the theme state changes, store it in localStorage
        localStorage.setItem("theme", theme);

        // Apply the theme class to the body element
        document.body.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        // Toggle between light and dark theme
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, ThemeContext };
