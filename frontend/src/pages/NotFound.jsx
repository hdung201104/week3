import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-sky-50 to-sky-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-sky-600 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-900 mb-2">Page Not Found</p>
        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn-primary">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
