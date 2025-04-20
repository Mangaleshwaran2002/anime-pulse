import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";

function ThemeToggle() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <label
            htmlFor="themeToggle"
            className="relative block h-8 w-14 rounded-full bg-gray-300 transition-colors [-webkit-tap-highlight-color:_transparent] has-checked:bg-blue-500 dark:bg-gray-600 dark:has-checked:bg-blue-600"
        >
            <input
                type="checkbox"
                id="themeToggle"
                className="peer sr-only"
                checked={theme === "dark"}
                onChange={toggleTheme}
            />

            <span
                className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-gray-300 ring-[6px] ring-white transition-all ring-inset peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent dark:bg-gray-600 dark:ring-gray-900 dark:peer-checked:bg-gray-900"
            />
        </label>
    );
}

export default ThemeToggle;
