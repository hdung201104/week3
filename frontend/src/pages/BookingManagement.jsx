import React, { useState } from 'react';
import Card from '../components/common/Card';
import { Bookmark, Clock, CheckCircle, XCircle } from 'lucide-react';

const BookingManagement = () => {
  const [bookings] = useState([
    { id: 'BK-001', tour: 'Ha Long Bay Adventure', customer: 'Nguyen Van A', date: '2026-06-15', status: 'Pending', amount: 2500000 },
    { id: 'BK-002', tour: 'Sapa Trekking', customer: 'Tran Thi B', date: '2026-06-20', status: 'Approved', amount: 1800000 },
    { id: 'BK-003', tour: 'Da Nang Beach', customer: 'Pham Van C', date: '2026-06-25', status: 'Completed', amount: 1500000 },
    { id: 'BK-004', tour: 'Ho Chi Minh City', customer: 'Hoang Thi D', date: '2026-07-01', status: 'Rejected', amount: 1200000 },
  ]);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'Approved':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'Rejected':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'Completed':
        return <CheckCircle className="w-5 h-5 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Booking Management</h1>
          <p className="text-gray-600 mt-2">Manage and track all bookings</p>
        </div>
        <button className="btn-primary">+ New Booking</button>
      </div>

      {/* Status Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Pending', count: 12, color: 'yellow' },
          { label: 'Approved', count: 28, color: 'green' },
          { label: 'Completed', count: 45, color: 'blue' },
          { label: 'Rejected', count: 3, color: 'red' },
        ].map((stat) => (
          <Card key={stat.label}>
            <div className="text-center">
              <p className="text-gray-600 text-sm">{stat.label}</p>
              <p className={`text-3xl font-bold text-${stat.color}-600 mt-2`}>{stat.count}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Bookings Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-4 font-semibold">Booking ID</th>
                <th className="text-left p-4 font-semibold">Tour</th>
                <th className="text-left p-4 font-semibold">Customer</th>
                <th className="text-left p-4 font-semibold">Date</th>
                <th className="text-left p-4 font-semibold">Status</th>
                <th className="text-right p-4 font-semibold">Amount</th>
                <th className="text-center p-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium">{booking.id}</td>
                  <td className="p-4">{booking.tour}</td>
                  <td className="p-4">{booking.customer}</td>
                  <td className="p-4">{booking.date}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(booking.status)}
                      <span className="text-sm font-medium">{booking.status}</span>
                    </div>
                  </td>
                  <td className="p-4 text-right font-semibold">{booking.amount.toLocaleString()}đ</td>
                  <td className="p-4 text-center space-x-2">
                    <button className="text-sky-600 hover:underline text-sm">View</button>
                    <button className="text-red-600 hover:underline text-sm">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default BookingManagement;
