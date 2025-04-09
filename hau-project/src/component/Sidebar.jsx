import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Folder,
  Users,
  PieChart,
  MessageCircle,
  Code2,
} from 'lucide-react';

const menuItems = [
  { icon: <LayoutDashboard size={18} />, label: 'Dashboard', path: '/dashboard' },
  { icon: <Folder size={18} />, label: 'Projects', path: '/projects' },
  { icon: <Users size={18} />, label: 'Teams', path: '/teams' },
  { icon: <PieChart size={18} />, label: 'Analytics', path: '/analytics' },
  { icon: <MessageCircle size={18} />, label: 'Messages', path: '/messages' },
  { icon: <Code2 size={18} />, label: 'Integrations', path: '/integrations' },
];

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-white flex flex-col justify-between border-r p-4">
    
      <div>
       
        <div className="flex items-center gap-2 mb-8 px-2">
          <img src="./Image 1858.png" alt="Logo" />
        </div>

       
        <nav className="flex flex-col gap-2">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer transition 
                ${isActive ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      
      <div className="bg-blue-50 rounded-lg text-center mt-1 p-4">
        <img
          src="./Group.png"
          alt="Group"
          className="w-full h-80 object-contain mx-auto mb-2"
        />
        <p className="text-sm font-semibold text-gray-800 mb-1">
          V2.0 is available
        </p>
        <button className="mt-1 w-full h-10 px-6 py-1 border border-blue-500 text-blue-500 rounded hover:bg-blue-100 text-sm">
          Try now
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
