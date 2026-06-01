import React from 'react';
import Card from '../components/common/Card';
import { BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react';

const Analytics = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
        <p className="text-gray-600 mt-2">Track your business metrics and performance</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">₫125,000,000</p>
              <p className="text-green-600 text-sm mt-2">+20% this month</p>
            </div>
            <DollarSign className="w-12 h-12 text-green-600 opacity-20" />
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Bookings</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">1,234</p>
              <p className="text-green-600 text-sm mt-2">+15% this month</p>
            </div>
            <BarChart3 className="w-12 h-12 text-blue-600 opacity-20" />
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Customers</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">3,456</p>
              <p className="text-green-600 text-sm mt-2">+12% this month</p>
            </div>
            <Users className="w-12 h-12 text-purple-600 opacity-20" />
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Occupancy Rate</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">85.3%</p>
              <p className="text-green-600 text-sm mt-2">+5% this month</p>
            </div>
            <TrendingUp className="w-12 h-12 text-orange-600 opacity-20" />
          </div>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card title="Revenue Trend">
          <div className="h-64 bg-gradient-to-br from-sky-50 to-sky-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Chart visualization here</p>
          </div>
        </Card>

        <Card title="Booking Status Distribution">
          <div className="h-64 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Pie chart visualization here</p>
          </div>
        </Card>
      </div>

      {/* Top Performing Tours */}
      <Card title="Top Performing Tours">
        <div className="space-y-4">
          {[
            { name: 'Ha Long Bay Adventure', bookings: 156, revenue: 390000000 },
            { name: 'Sapa Trekking Tour', bookings: 128, revenue: 230400000 },
            { name: 'Da Nang Beach Tour', bookings: 115, revenue: 172500000 },
            { name: 'Ho Chi Minh City Tour', bookings: 98, revenue: 117600000 },
            { name: 'Mekong Delta Tour', bookings: 87, revenue: 156600000 },
          ].map((tour, index) => (
            <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">{tour.name}</p>
                <p className="text-sm text-gray-600">{tour.bookings} bookings</p>
              </div>
              <span className="font-semibold text-sky-600">₫{(tour.revenue / 1000000).toFixed(1)}M</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Analytics;
