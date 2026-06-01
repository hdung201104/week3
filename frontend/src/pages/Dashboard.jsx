import React from 'react';
import Card from '../components/common/Card';
import { TrendingUp, Users, MapPin, Bookmark } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { icon: Bookmark, label: 'Total Bookings', value: '1,234', change: '+12.5%' },
    { icon: MapPin, label: 'Active Tours', value: '42', change: '+5.2%' },
    { icon: Users, label: 'Total Customers', value: '3,456', change: '+8.1%' },
    { icon: TrendingUp, label: 'Revenue', value: '$125,000', change: '+15.3%' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's an overview of your business.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <p className="text-green-600 text-sm mt-2">{stat.change} from last month</p>
                </div>
                <Icon className="w-12 h-12 text-sky-600 opacity-20" />
              </div>
            </Card>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card title="Recent Bookings">
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <div>
                  <p className="font-medium">Tour #{1000 + i}</p>
                  <p className="text-sm text-gray-600">Booking ID: BK-{2000 + i}</p>
                </div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                  Pending
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Top Tours">
          <div className="space-y-4">
            {['Da Nang Tour', 'Ha Long Bay', 'Ho Chi Minh City', 'Sapa Adventure', 'Mekong Delta'].map((tour, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <p className="font-medium">{tour}</p>
                <span className="text-sky-600 font-semibold">{50 - i * 5} bookings</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
