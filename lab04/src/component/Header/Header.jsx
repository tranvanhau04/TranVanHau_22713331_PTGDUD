import React, { useState } from "react";
import logo from "../../images/logo.png";
import user_icon from "../../images/user_icon.png";
import search_icon from "../../images/search_icon.png";
import box_icon from "../../images/box_icon.png";
import './Header.css';

const menuItems = ["What to cook", "Recipes", "Ingredients", "Occasions", "About Us"];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow fixed top-0 left-0 right-0 w-full z-50">
            <div className="w-full flex items-center justify-start py-4 px-6 space-x-8">
                
                {/* Logo */}
                <a href="#" className="flex items-center !text-pink-600 font-extrabold text-2xl">
                    <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
                    Chefify
                </a>

                 {/* Search Bar */}
                 <div className="flex items-center bg-pink-100 text-pink-600 px-4 py-2 w-1/5 rounded-full hover:!bg-pink-200 transition duration-300 translate-x-[200px]">
                    <img src={search_icon} className="h-6 w-6 mr-2" alt="Search" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent outline-none  w-full text-gray-600"
                    />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-gray-700 translate-x-[300px]">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a href="#" className="text-lg !text-gray-500 hover:!text-pink-600 transition duration-300 transform hover:scale-105">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>


                {/* User Section */}
                <div className="hidden md:flex items-center space-x-4 translate-x-[450px]">
                    <button className="flex items-center bg-pink-100 text-pink-600 px-4 py-2  hover:!bg-pink-200 transition duration-300 focus:!outline-none focus:!ring-0 hover:!outline-none">
                        <img src={box_icon} alt="Recipe Box" className="h-5 w-5 mr-2" />
                        Your Recipe Box
                    </button>
                    <img src={user_icon} alt="User" className="h-10 w-10 rounded-full border-2 border-gray-200" />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-600 focus:outline-none ml-auto"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md p-4">
                    <ul className="space-y-4">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <a href="#" className="block text-gray-700 hover:text-pink-600 transition duration-300">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
