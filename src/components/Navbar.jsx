import React from 'react';
import ThemeSwitch from './ThemeSwitch';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="p-5 bg-white dark:bg-dark-background shadow-lg dark:dark-mode-shadow">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-5">
                    <h3 className='text-xl font-bold text-black dark:text-dark-text mx-10'>MB</h3>
                    <div className="flex space-x-10"> {/* Adjusted spacing */}
                        <li className='text-xl font-bold text-black dark:text-dark-text cursor-pointer relative'>About Me</li>
                        <li className='text-xl font-bold text-black dark:text-dark-text cursor-pointer relative'>About Me</li>
                    </div>
                </div>
                <ThemeSwitch />
            </div>
        </nav>
    );
}

export default Navbar;
