import React from "react";

export default function Header() {
    return (
        <header className="bg-white p-4 flex items-center justify-between shadow-md">
            <h2 className="text-pink-500 text-2xl font-bold">Dashboard</h2>
            
            <div className="relative">
                <img 
                    src="/Search.png" 
                    alt="Search" 
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                />
                <input 
                    type="text" 
                    placeholder="Search"
                    className="pl-10 pr-2 text-gray-900 p-2 rounded-md border border-gray-300"
                />
            </div>
        </header>
    );
}
