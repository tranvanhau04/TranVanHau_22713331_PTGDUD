import React from 'react';
import { Bell, HelpCircle, Search } from 'lucide-react';

const Topbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-6 border-b bg-white">
      {/* Left: Title */}
      <h1 className="text-xl font-bold text-pink-600">Dashboard</h1>

      {/* Center: Search Bar */}
      <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md w-80">
        <Search size={16} className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder:text-gray-400"
        />
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-4">
        <Bell className="text-gray-600" size={20} />
        <HelpCircle className="text-gray-600" size={20} />
        <img
          src="https://i.pravatar.cc/300"
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default Topbar;
