import React from 'react';
import DarkModeSwitch from './DarkMode/ModeSwitch.jsx';

function Navbar() {

    
     return (
        <div className={`fixed top-0 left-0 right-0 z-10`}>
            <nav className={`bg-gray-navbar text-white text-xl flex justify-between items-center gap-4 p-2`}>
                <ul className="flex space-x-12 m-0 p-0 list-none">
                    <li className="hover:bg-gray-400 p-2">
                        <a href="/" className="no-underline text-inherit">Home</a>
                    </li>
                    <li className="hover:bg-gray-400 p-2">
                        <a href="https://capstone-projects-2024-spring.github.io/project-phillygpt/" className="no-underline text-inherit">Documentation</a>
                    </li>
                    <li className="hover:bg-gray-400 p-2">
                        <a href="https://github.com/Capstone-Projects-2024-Spring/project-phillygpt" className="no-underline text-inherit">GitHub</a>
                    </li>
                </ul>
                
                <DarkModeSwitch />
            </nav>
            <div className={`bg-white h-0.5 w-full absolute bottom-0 left-0`}></div>
        </div>
    );
}

export default Navbar;
