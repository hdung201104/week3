import React from 'react';
import { X, Home, MapPin, Bookmark, BarChart3, Users, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = ({ open, setOpen }) => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: MapPin, label: 'Tours', href: '/tours' },
    { icon: Bookmark, label: 'Bookings', href: '/bookings' },
    { icon: BarChart3, label: 'Analytics', href: '/analytics' },
    { icon: Users, label: 'Customers', href: '/customers' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-screen w-64 bg-gradient-to-b from-sky-700 to-sky-900 text-white transform transition-transform duration-300 lg:translate-x-0 z-50 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b border-sky-600">
          <h1 className="text-2xl font-bold">TTMS</h1>
          <button
            onClick={() => setOpen(false)}
            className="lg:hidden p-1 hover:bg-sky-600 rounded"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mt-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center gap-3 px-6 py-3 hover:bg-sky-600 transition-colors"
                onClick={() => setOpen(false)}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
