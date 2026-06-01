import React, { useState } from 'react';
import Card from '../components/common/Card';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

const TourSearch = () => {
  const [filters, setFilters] = useState({
    destination: '',
    budget: 'all',
    season: 'all',
    date: '',
  });

  const tours = [
    { id: 1, name: 'Ha Long Bay Adventure', destination: 'Ha Long', price: 2500000, duration: 3, rating: 4.8 },
    { id: 2, name: 'Sapa Trekking Tour', destination: 'Sapa', price: 1800000, duration: 4, rating: 4.6 },
    { id: 3, name: 'Da Nang Beach Tour', destination: 'Da Nang', price: 1500000, duration: 3, rating: 4.7 },
    { id: 4, name: 'Ho Chi Minh City Tour', destination: 'Ho Chi Minh City', price: 1200000, duration: 2, rating: 4.5 },
    { id: 5, name: 'Mekong Delta Tour', destination: 'Mekong', price: 1800000, duration: 2, rating: 4.6 },
    { id: 6, name: 'Hoi An Ancient Town', destination: 'Hoi An', price: 1400000, duration: 2, rating: 4.9 },
  ];

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Search Tours</h1>
        <p className="text-gray-600 mt-2">Find and book your perfect tour</p>
      </div>

      {/* Filters */}
      <Card className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Destination</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                name="destination"
                value={filters.destination}
                onChange={handleFilterChange}
                className="input-field pl-10"
                placeholder="Search destination..."
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Budget</label>
            <select
              name="budget"
              value={filters.budget}
              onChange={handleFilterChange}
              className="input-field"
            >
              <option value="all">All Budgets</option>
              <option value="0-1000000">Under 1M</option>
              <option value="1000000-2000000">1M - 2M</option>
              <option value="2000000-3000000">2M - 3M</option>
              <option value="3000000">Over 3M</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Season</label>
            <select
              name="season"
              value={filters.season}
              onChange={handleFilterChange}
              className="input-field"
            >
              <option value="all">All Seasons</option>
              <option value="spring">Spring</option>
              <option value="summer">Summer</option>
              <option value="autumn">Autumn</option>
              <option value="winter">Winter</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Departure Date</label>
            <input
              type="date"
              name="date"
              value={filters.date}
              onChange={handleFilterChange}
              className="input-field"
            />
          </div>
        </div>
        <button className="btn-primary mt-4">Search Tours</button>
      </Card>

      {/* Tours Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <Card key={tour.id} className="card-hover">
            <div className="bg-sky-100 h-40 rounded-lg mb-4 flex items-center justify-center">
              <MapPin className="w-12 h-12 text-sky-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{tour.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{tour.destination} • {tour.duration} days</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold text-sky-600">{tour.price.toLocaleString()}đ</span>
              <span className="text-sm font-medium text-yellow-500">★ {tour.rating}</span>
            </div>
            <button className="w-full btn-primary">Book Now</button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TourSearch;
