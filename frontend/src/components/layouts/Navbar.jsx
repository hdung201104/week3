import React, { useState } from 'react';
import { Menu, X, Bell, User } from 'lucide-react';

const Navbar = ({ setOpen }) => {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setOpen(prev => !prev)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu size={24} />
          </button>
          <div className="hidden md:block">
            <h1 className="text-2xl font-bold text-sky-600">TTMS</h1>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* Notifications */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg">
            <Bell size={24} />
            <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile */}
          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <User size={24} />
            </button>
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Profile</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
