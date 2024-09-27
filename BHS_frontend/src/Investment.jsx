import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { jsPDF } from 'jspdf';
import StatsTable from './StatsTable';
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
  //
  return (
    <div className="flex bg-gray-100 ">
      <div className="flex-1 flex flex-col mx-8 sm:mx-12 lg:mx-16">
        {/* Profile Section */}
        <div className="flex items-center mt-8 mb-6 m-6">
          <div className='pl-3'>
            <h2 className="text-3xl font-bold">Hello, John Doe</h2>
            <p className="text-gray-500 text-lg">Investment ID</p>
          </div>
        </div>

        <main className="flex-1">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-6">
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
              <h2 className="text-lg font-bold"> Ticket size</h2>
              <p className="text-3xl font-semibold">10%</p>
              <p className="text-sm text-green-500">+ $379K this month</p>
            </div>

            {/* Total Views Card */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-bold">Agreed ROI</h2>
              <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center m-2">
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download</span>
</button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-6">
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
              <h2 className="text-lg font-bold"> Ticket size</h2>
              <p className="text-3xl font-semibold">10%</p>
              <p className="text-sm text-green-500">+ $379K this month</p>
            </div>

            {/* Total Views Card */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-bold">Agreed ROI</h2>
              <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center m-2">
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download</span>
</button>
            </div>
          </div>
          <h1 className='text-3xl font-semibold m-6'>Latest Updates</h1>
        <StatsTable/>
        
        </main>

        {/* ... (rest of the code remains unchanged) ... */}
      </div>
    </div>
  );
};

export default Investment;
