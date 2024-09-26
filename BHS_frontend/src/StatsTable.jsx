// src/components/StatsTable.js

import React from 'react';

const StatsTable = () => {
  const data = [
    { day: 'Fri', date: '09/13/2024', subsChange: '', subsTotal: '315,000,000', viewsChange: '+57,283,981', viewsTotal: '58,633,945,921', revenueRange: '$41.4K - $115K' },
    { day: 'Sat', date: '09/14/2024', subsChange: '', subsTotal: '315,000,000', viewsChange: '+78,747,243', viewsTotal: '58,712,693,164', revenueRange: '$55.8K - $155K' },
    { day: 'Sun', date: '09/15/2024', subsChange: '', subsTotal: '315,000,000', viewsChange: '+74,841,781', viewsTotal: '58,787,534,945', revenueRange: '$52.6K - $146K' },
    { day: 'Mon', date: '09/16/2024', subsChange: '', subsTotal: '315,000,000', viewsChange: '+73,508,018', viewsTotal: '58,861,042,963', revenueRange: '$45.9K - $127K' },
    { day: 'Tue', date: '09/17/2024', subsChange: '+1,000,000', subsTotal: '316,000,000', viewsChange: '+59,469,752', viewsTotal: '58,920,512,715', revenueRange: '$35.6K - $99.4K' },
    { day: 'Wed', date: '09/18/2024', subsChange: '', subsTotal: '316,000,000', viewsChange: '+53,863,201', viewsTotal: '58,974,375,916', revenueRange: '$37K - $103K' },
    { day: 'Thu', date: '09/19/2024', subsChange: '', subsTotal: '316,000,000', viewsChange: '+52,163,523', viewsTotal: '59,026,539,439', revenueRange: '$38.4K - $106K' },
    { day: 'Fri', date: '09/20/2024', subsChange: '', subsTotal: '316,000,000', viewsChange: '+54,975,611', viewsTotal: '59,081,515,050', revenueRange: '$30.9K - $86.2K' },
    { day: 'Sun', date: '09/22/2024', subsChange: '', subsTotal: '316,000,000', viewsChange: '+192,649,696', viewsTotal: '59,274,164,746', revenueRange: '$92.1K - $257K' },
    { day: 'Mon', date: '09/23/2024', subsChange: '+1,000,000', subsTotal: '317,000,000', viewsChange: '+71,363,498', viewsTotal: '59,345,528,244', revenueRange: '$31.5K - $88K' },
    { day: 'Tue', date: '09/24/2024', subsChange: '', subsTotal: '317,000,000', viewsChange: '+70,022,489', viewsTotal: '59,415,550,733', revenueRange: '$34.7K - $97K' },
    { day: 'Wed', date: '09/25/2024', subsChange: '', subsTotal: '317,000,000', viewsChange: '', viewsTotal: '59,415,550,733', revenueRange: '' },
  ];

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Day</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Subs Change</th>
              <th className="px-4 py-2 text-left">Subs Total</th>
              <th className="px-4 py-2 text-left">Views Change</th>
              <th className="px-4 py-2 text-left">Views Total</th>
              <th className="px-4 py-2 text-left">Revenue Range</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{item.day}</td>
                <td className="px-4 py-2">{item.date}</td>
                <td className={`px-4 py-2 ${item.subsChange ? 'text-green-500 font-bold' : ''}`}>
                  {item.subsChange || '-'}
                </td>
                <td className="px-4 py-2">{item.subsTotal}</td>
                <td className={`px-4 py-2 ${item.viewsChange ? 'text-green-500' : ''}`}>
                  {item.viewsChange}
                </td>
                <td className="px-4 py-2">{item.viewsTotal}</td>
                <td className="px-4 py-2">{item.revenueRange || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatsTable;