import React from 'react';
import DarkModeSwitch from './DarkMode/ModeSwitch.jsx';
import CheckClass from './DarkMode/checkClass.jsx';

function Navbar() {
    const isDark = CheckClass();
    
    const backgroundColor = isDark ? 'bg-gray-navbar' : 'bg-navbar-lm';
    const textColor = isDark ? 'text-white' : 'text-black';

     return (
        <div className={`fixed top-0 left-0 right-0 z-10`}>
            <nav className={`${backgroundColor} ${textColor} text-xl flex justify-between items-center gap-4 p-2`}>
                <ul className="flex space-x-12 m-0 p-0 list-none">
                    <li className={`${isDark ? 'hover:bg-gray-400' : 'hover:bg-lm_nav'} p-2`}>
                            <a href="/" className="no-underline text-inherit">Home</a>
                    </li>
                    <li className={`${isDark ? 'hover:bg-gray-400' : 'hover:bg-lm_nav'} p-2`}>
                        <a href="https://capstone-projects-2024-spring.github.io/project-phillygpt/" className="no-underline text-inherit">Documentation</a>
                    </li>
                    <li className={`${isDark ? 'hover:bg-gray-400' : 'hover:bg-lm_nav'} p-2`}>
                        <a href="https://github.com/Capstone-Projects-2024-Spring/project-phillygpt" className="no-underline text-inherit">GitHub</a>
                    </li>
                </ul>
                
                <DarkModeSwitch />
            </nav>
            <div className={`${isDark ? 'bg-white' : 'bg-black'} h-0.5 w-full absolute bottom-0 left-0`}></div>
        </div>
    );
}

export default Navbar;
