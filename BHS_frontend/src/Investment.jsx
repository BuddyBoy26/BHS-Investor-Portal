import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { jsPDF } from 'jspdf';

const Investment = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Generate random data for the line chart
    const generateRandomData = () => {
      const currentDate = new Date();
      return [...Array(28)].map((_, i) => {
        const date = new Date(currentDate.getTime() - (27 - i) * 24 * 60 * 60 * 1000);
        const views = Math.floor(Math.random() * 1000000);
        return {
          date: `${date.getMonth() + 1}/${date.getDate()}`,
          views: views
        };
      });
    };

    setData(generateRandomData());
  }, []);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.addImage('/path-to-chart.png', 'PNG', 10, 10, 190, 120);
    doc.setFontSize(16);
    doc.text('Investment Dashboard', 20, 150);
    doc.setFontSize(12);
    doc.text('John Doe', 20, 170);
    doc.text('Investment ID', 20, 180);
    doc.save('investment-dashboard.pdf');
  };

  const downloadContract = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Contract Details', 20, 20);
    doc.setFontSize(12);
    doc.text('Contract ID: 12345', 20, 40);
    doc.text('Start Date: 01/01/2023', 20, 50);
    doc.text('End Date: 12/31/2023', 20, 60);
    doc.text('Investment Amount: $100,000', 20, 70);
    doc.save('investment-contract.pdf');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col mx-8 sm:mx-12 lg:mx-16">
        {/* Profile Section */}
        <div className="flex items-center mt-8 mb-6">
          <div className='pl-3'>
            <h2 className="text-3xl font-bold">Hello, John Doe</h2>
            <p className="text-gray-500 text-lg">Investment ID</p>
          </div>
        </div>

        <main className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Views Card */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-bold">Investment Value</h2>
              <p className="text-3xl font-semibold">1.88B</p>
              <p className="text-sm text-green-500">+108M in 28 Days</p>
            </div>

            {/* Subscribers Card */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-bold">No. of Assets</h2>
              <p className="text-3xl font-semibold">317M</p>
              <p className="text-sm text-gray-500">#1 Ranking</p>
            </div>

            {/* Estimated Revenue Card */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-bold">Garunteed ROI</h2>
              <p className="text-3xl font-semibold">10%</p>
              <p className="text-sm text-green-500">+ $379K this month</p>
            </div>

            {/* Total Views Card */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-bold">Current ROI</h2>
              <p className="text-3xl font-semibold">12%</p>
              <p className="text-sm text-gray-500">Ranked #16 Globally</p>
            </div>
          </div>

        <div className="flex flex-col items-center bg-gray-100 min-h-screen p-8">
          <div className="flex flex-col w-full lg:flex-row lg:justify-between space-y-6 lg:space-y-0 lg:space-x-6">
            {/* Profile Section */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Investment Overview</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="views" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Contract Details Section */}
            <div className="flex flex-col lg:w-1/4 space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-bold mb-4">Contract Details</h2>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
                  onClick={downloadContract}
                >
                  Download Contract
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-bold mb-4">Assets</h2>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={downloadPDF}
                >
                  Veiw your assets
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-bold">Most Recent Video</h2>
              <p>Men Vs Women Survive The Wilderness For $500,000</p>
              <p>Views: 104M</p>
              <p>Ranked 6th in views</p>
            </div>

            {/* Longs vs Shorts Views Section */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-bold">Longs vs Shorts Views</h2>
              <div className="flex items-center">
                <div className="w-1/2">
                  <p>Long Views: 492.9M</p>
                  <p>Short Views: 1.4B</p>
                </div>
                <div className="w-1/2">
                  <img src="/path-to-pie-chart.png" alt="Pie Chart" />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* ... (rest of the code remains unchanged) ... */}
      </div>
    </div>
  );
};

export default Investment;