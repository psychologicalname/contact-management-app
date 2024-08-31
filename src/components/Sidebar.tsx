import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for menu toggle

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <nav className="bg-gray-800 text-white">
            {/* Mobile menu button */}
            <div className="md:hidden sticky top-0 flex justify-between items-center p-4">
                <h1 className="text-2xl font-bold">LOGO</h1>
                <div className='justify-end'>
                    <button onClick={toggleMenu} aria-label="Toggle menu">
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden ${!isOpen ? 'hidden' : 'flex'} bg-gray-800 z-10 rounded-l-lg absolute top-10 right-0`}>
                <div className="flex flex-col justify-end items-start">
                    <NavLink
                        to="/"
                        className='py-2 px-4'
                        onClick={toggleMenu}
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/Dashboard"
                        className='py-2 px-4'
                        onClick={toggleMenu}
                    >
                        Charts and Maps
                    </NavLink>
                </div>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex flex-col w-52 lg:w-64 h-screen sticky top-0">
                <h1 className="text-2xl font-bold p-6">LOGO</h1>
                <div className="flex flex-col">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `py-2 px-4 ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`
                        }
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/Dashboard"
                        className={({ isActive }) =>
                            `py-2 px-4 ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}`
                        }
                    >
                        Charts and Maps
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
