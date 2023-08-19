import React, { useState, useEffect } from 'react';
import './ThemeSwitch.css';  // Assuming you saved the above styles in ThemeSwitch.css

export default function ThemeSwitch() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDark = document.documentElement.classList.contains('dark');
        setDarkMode(isDark);
    }, []);

    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
        setDarkMode(!darkMode);
    };

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
