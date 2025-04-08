import React from 'react';
const Sidebar = () => (
    <aside className="w-64 bg-white-100 p-4 flex flex-col justify-between shadow">
      {/* Logo */}
      <div>
        <div className="flex items-center mb-6">
          <div className="h-8 w-8 bg-gray-300 rounded-full mr-2"></div>
          <div className="h-4 w-24 bg-gray-300 rounded"></div>
        </div>
        {/* Menu Items */}
        <nav className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`h-10 w-full ${i === 0 ? 'bg-pink-400' : 'bg-gray-200'} rounded-lg`}></div>
          ))}
        </nav>
      </div>
      {/* Promo */}
      <div className="bg-blue-50 p-4 rounded-lg mt-6">
        <div className="h-32 bg-gray-200 rounded mb-2"></div>
        <div className="h-8 w-24 bg-blue-500 text-white text-center rounded mx-auto"></div>
      </div>
    </aside>
  );
  
  export default Sidebar;
  