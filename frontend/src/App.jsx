import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Sidebar from './components/layouts/Sidebar';
import Footer from './components/layouts/Footer';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import TourSearch from './pages/TourSearch';
import BookingManagement from './pages/BookingManagement';
import Analytics from './pages/Analytics';
import NotFound from './pages/NotFound';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <Router>
      {isLoggedIn ? (
        <div className="flex h-screen bg-gray-100">
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
          <div className="flex-1 flex flex-col">
            <Navbar setOpen={setSidebarOpen} />
            <main className="flex-1 overflow-y-auto p-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/tours" element={<TourSearch />} />
                <Route path="/bookings" element={<BookingManagement />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
