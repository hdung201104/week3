import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, BarChart3, Shield } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Tour Management',
      description: 'Manage and organize tours with ease'
    },
    {
      icon: Users,
      title: 'Customer Management',
      description: 'Keep track of all your customers and bookings'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Get insights into your business performance'
    },
    {
      icon: Shield,
      title: 'Secure Booking',
      description: 'Safe and reliable booking system'
    },
  ];

  return (
    <div className="bg-gradient-to-b from-sky-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-sky-600">TTMS</h1>
          <Link to="/login" className="btn-primary">
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Tour & Travel Management System
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Streamline your travel business with our comprehensive platform.
          Manage tours, bookings, and customers all in one place.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/login" className="btn-primary">
            Get Started
          </Link>
          <button className="btn-secondary">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="card text-center hover:shadow-lg transition-shadow">
                <Icon className="w-12 h-12 text-sky-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sky-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg mb-8">Join thousands of travel agencies using TTMS</p>
          <Link to="/login" className="inline-block bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>&copy; 2026 TTMS - SWR-G6. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
