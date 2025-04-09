import React from 'react';
import { LayoutDashboard, Folder, Users, PieChart, MessageCircle, Code2 } from 'lucide-react';

const menuItems = [
  { icon: <LayoutDashboard size={18} />, label: 'Dashboard', active: true },
  { icon: <Folder size={18} />, label: 'Projects' },
  { icon: <Users size={18} />, label: 'Teams' },
  { icon: <PieChart size={18} />, label: 'Analytics' },
  { icon: <MessageCircle size={18} />, label: 'Messages' },
  { icon: <Code2 size={18} />, label: 'Integrations' },
];

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-white flex flex-col justify-between border-r p-4">
      {/* Top: Logo + Menu */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8 px-2">
          <img src="./Image 1858.png" alt="" />
          
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-2">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer 
              ${item.active ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom: Promo */}
      <div className="bg-blue-50 rounded-lg text-center mt-1 p-4">
      <img
  src="./Group.png"
  alt="Group"
  className="w-full h-80 object-contain mx-auto mb-2"
/>
  <p className="text-sm font-semibold text-gray-800 mb-1">V2.0 is available</p>
  <button className="mt-1 w-full h-10 px-6 py-1 border border-blue-500 text-blue-500 rounded hover:bg-blue-100 text-sm">
    Try now
  </button>
</div>
    </aside>
  );
};

export default Sidebar;
