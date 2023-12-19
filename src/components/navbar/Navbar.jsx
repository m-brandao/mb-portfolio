import React, { useState } from 'react';
import './Navbar.css';
import ThemeSwitch from '../themeSwitcher/ThemeSwitch';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <nav className="nav flex bg-slate-100 shadow-lg dark:bg-slate-950 dark:dark-mode-shadow sticky top-0 mx-auto p-5 z-50">
                {/* DESKTOP MENU */}
                <h3 className='w-3/5 text-sm md:text-xl font-bold text-black dark:text-slate-200 cursor-pointer relative pt-3 max-sm:hidden'>Miguel Brandão <span className='text-sm font-thin'>| Web Developer</span></h3>
                <div className="flex w-2/5 justify-end gap-5 pr-[1%] max-sm:hidden">
                    <li className="text-base font-bold text-black dark:text-dark-text hover:bg-slate-300 dark:hover:bg-gray-700 rounded-md px-3 py-2 cursor-pointer relative">About Me</li>
                    <li className="text-base font-bold text-black dark:text-dark-text hover:bg-slate-300 dark:hover:bg-gray-700 rounded-md px-3 py-2 cursor-pointer relative">Projects</li>
                    <li className="text-base font-bold text-black dark:text-dark-text hover:bg-slate-300 dark:hover:bg-gray-700 rounded-md px-3 py-2 cursor-pointer relative mr-10">Contacts</li>
                    <li><ThemeSwitch /></li>
                </div>

                <button onClick={toggleMenu} className="text-black hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-dark-text float-right sm:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>

                <h3 className='w-1/1 text-sm md:text-xl font-bold text-black dark:text-slate-200 cursor-pointer relative pt-1 mx-auto sm:hidden'>Miguel Brandão | <span className='tracking-tight text-sm font-thin'>Web Developer</span></h3>


                {/* MOBILE MENU */}
                <div className={`${isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'} transform transition-transform duration-300 sm:hidden absolute top-0 left-0 w-screen h-screen bg-white dark:bg-slate-950 dark:dark-mode-shadow flex flex-col justify-center items-center`}>
                    <li>
                        <button onClick={closeMenu} className="text-black hover:text-gray-200 absolute top-4 right-4 focus:outline-none dark:text-dark-text">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    </li>
                    <li className="text-3xl font-bold text-black dark:text-dark-text cursor-pointer relative">About Me</li>
                    <li className="text-3xl font-bold text-black dark:text-dark-text cursor-pointer relative">Projects</li>
                    <li className="text-3xl font-bold text-black dark:text-dark-text cursor-pointer relative">Contacts</li>
                    <li className='mt-24'><ThemeSwitch /></li>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
