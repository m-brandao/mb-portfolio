import React, { useState, useEffect } from 'react';
import './ThemeSwitch.css';  // Assuming you saved the above styles in ThemeSwitch.css

export default function ThemeSwitch() {
    // Check if a theme preference is already saved in local storage
    const savedTheme = localStorage.getItem('theme');
    const initialDarkMode = savedTheme === 'dark';

    // Initialize state with the saved theme preference or default to light mode
    const [darkMode, setDarkMode] = useState(initialDarkMode);

    // Function to toggle and save the theme preference
    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);

        // Save the theme preference in local storage
        localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');

        // Add or remove the 'dark' class to the document element
        if (newDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    useEffect(() => {
        // Set the 'dark' class on the document element when the component mounts
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
            <span className="slider round">
                <span className="icon sun-icon">☀</span>
                <span className="icon moon-icon">🌙</span>
            </span>
        </label>
    );
}
