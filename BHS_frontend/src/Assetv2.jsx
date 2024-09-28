import React from "react";
import AssetsTable from "./AssetsTable";

const Asset = () => {
  const vehicleInfo = {
    Numberplate: "A12345",
    Type: "Flatbed",
    Brand: "Volvo",
    Model: "FMX2019",
  };

  const TripsColumn = [
    "Trip Number",
    "To",
    "From",
    "Start Date",
    "End Date",
    "Value",
    "Split",
  ];

  const TripsRow = [
    {
      TripNumber: 1,
      To: "Riyadh, Saudi Arabia",
      From: "Dubai, UAE",
      StartDate: "2024-09-01",
      EndDate: "2024-09-03",
      Value: 15000,
      Calculations: 1500,
    },
    {
      TripNumber: 2,
      To: "Muscat, Oman",
      From: "Abu Dhabi, UAE",
      StartDate: "2024-09-05",
      EndDate: "2024-09-06",
      Value: 8000,
      Calculations: 800,
    },
    {
      TripNumber: 3,
      To: "Jeddah, Saudi Arabia",
      From: "Doha, Qatar",
      StartDate: "2024-09-10",
      EndDate: "2024-09-12",
      Value: 20000,
      Calculations: 2000,
    },
    {
      TripNumber: 4,
      To: "Cairo, Egypt",
      From: "Riyadh, Saudi Arabia",
      StartDate: "2024-09-15",
      EndDate: "2024-09-18",
      Value: 25000,
      Calculations: 2500,
    },
    {
      TripNumber: 5,
      To: "Kuwait City, Kuwait",
      From: "Manama, Bahrain",
      StartDate: "2024-09-20",
      EndDate: "2024-09-21",
      Value: 10000,
      Calculations: 1000,
    },
    {
      TripNumber: 6,
      To: "Amman, Jordan",
      From: "Beirut, Lebanon",
      StartDate: "2024-09-22",
      EndDate: "2024-09-23",
      Value: 12000,
      Calculations: 1200,
    },
    {
      TripNumber: 7,
      To: "Damascus, Syria",
      From: "Baghdad, Iraq",
      StartDate: "2024-09-25",
      EndDate: "2024-09-26",
      Value: 18000,
      Calculations: 1800,
    },
    {
      TripNumber: 8,
      To: "Sanaa, Yemen",
      From: "Muscat, Oman",
      StartDate: "2024-09-27",
      EndDate: "2024-09-29",
      Value: 22000,
      Calculations: 2200,
    },
    {
      TripNumber: 9,
      To: "Tripoli, Libya",
      From: "Tunis, Tunisia",
      StartDate: "2024-09-30",
      EndDate: "2024-10-01",
      Value: 9000,
      Calculations: 900,
    },
    {
      TripNumber: 10,
      To: "Algiers, Algeria",
      From: "Oran, Algeria",
      StartDate: "2024-10-02",
      EndDate: "2024-10-03",
      Value: 7000,
      Calculations: 700,
    },
    {
      TripNumber: 11,
      To: "Casablanca, Morocco",
      From: "Marrakesh, Morocco",
      StartDate: "2024-10-05",
      EndDate: "2024-10-06",
      Value: 13000,
      Calculations: 1300,
    },
    {
      TripNumber: 12,
      To: "Doha, Qatar",
      From: "Manama, Bahrain",
      StartDate: "2024-10-07",
      EndDate: "2024-10-08",
      Value: 11000,
      Calculations: 1100,
    },
    {
      TripNumber: 13,
      To: "Dubai, UAE",
      From: "Muscat, Oman",
      StartDate: "2024-10-09",
      EndDate: "2024-10-10",
      Value: 16000,
      Calculations: 1600,
    },
    {
      TripNumber: 14,
      To: "Jeddah, Saudi Arabia",
      From: "Mecca, Saudi Arabia",
      StartDate: "2024-10-12",
      EndDate: "2024-10-12",
      Value: 5000,
      Calculations: 500,
    },
    {
      TripNumber: 15,
      To: "Riyadh, Saudi Arabia",
      From: "Dammam, Saudi Arabia",
      StartDate: "2024-10-13",
      EndDate: "2024-10-14",
      Value: 14000,
      Calculations: 1400,
    },
    {
      TripNumber: 16,
      To: "Tunis, Tunisia",
      From: "Algiers, Algeria",
      StartDate: "2024-10-15",
      EndDate: "2024-10-16",
      Value: 17000,
      Calculations: 1700,
    },
    {
      TripNumber: 17,
      To: "Baghdad, Iraq",
      From: "Tehran, Iran",
      StartDate: "2024-10-17",
      EndDate: "2024-10-18",
      Value: 19000,
      Calculations: 1900,
    },
    {
      TripNumber: 18,
      To: "Khartoum, Sudan",
      From: "Cairo, Egypt",
      StartDate: "2024-10-19",
      EndDate: "2024-10-21",
      Value: 22000,
      Calculations: 2200,
    },
    {
      TripNumber: 19,
      To: "Beirut, Lebanon",
      From: "Damascus, Syria",
      StartDate: "2024-10-22",
      EndDate: "2024-10-22",
      Value: 6000,
      Calculations: 600,
    },
    {
      TripNumber: 20,
      To: "Doha, Qatar",
      From: "Dubai, UAE",
      StartDate: "2024-10-23",
      EndDate: "2024-10-24",
      Value: 18000,
      Calculations: 1800,
    },
  ];

  const TruckHistoryRow = [
    {
      Time: "2024-09-01 08:00",
      Speed: 65,
      Location: "Dubai, UAE",
      Ignition: "ON",
      Fuel: 300,
    },
    {
      Time: "2024-09-01 09:30",
      Speed: 75,
      Location: "Sharjah, UAE",
      Ignition: "ON",
      Fuel: 290,
    },
    {
      Time: "2024-09-02 10:15",
      Speed: 0,
      Location: "Rest Stop, Ajman, UAE",
      Ignition: "OFF",
      Fuel: 288,
    },
    {
      Time: "2024-09-03 09:00",
      Speed: 80,
      Location: "Ras Al Khaimah, UAE",
      Ignition: "ON",
      Fuel: 275,
    },
    {
      Time: "2024-09-03 09:30",
      Speed: 60,
      Location: "Fujairah, UAE",
      Ignition: "ON",
      Fuel: 265,
    },
    {
      Time: "2024-09-04 10:00",
      Speed: 85,
      Location: "Muscat, Oman",
      Ignition: "ON",
      Fuel: 250,
    },
    {
      Time: "2024-09-04 10:30",
      Speed: 70,
      Location: "Sohar, Oman",
      Ignition: "ON",
      Fuel: 240,
    },
    {
      Time: "2024-09-05 11:00",
      Speed: 0,
      Location: "Rest Stop, Oman",
      Ignition: "OFF",
      Fuel: 238,
    },
    {
      Time: "2024-09-05 11:30",
      Speed: 60,
      Location: "Al Buraimi, Oman",
      Ignition: "ON",
      Fuel: 230,
    },
    {
      Time: "2024-09-06 12:00",
      Speed: 90,
      Location: "Abu Dhabi, UAE",
      Ignition: "ON",
      Fuel: 210,
    },
    {
      Time: "2024-09-06 12:30",
      Speed: 100,
      Location: "Al Ain, UAE",
      Ignition: "ON",
      Fuel: 195,
    },
    {
      Time: "2024-09-07 01:00",
      Speed: 85,
      Location: "Al Hasa, Saudi Arabia",
      Ignition: "ON",
      Fuel: 180,
    },
    {
      Time: "2024-09-07 01:30",
      Speed: 0,
      Location: "Rest Stop, Saudi Arabia",
      Ignition: "OFF",
      Fuel: 178,
    },
    {
      Time: "2024-09-08 02:00",
      Speed: 75,
      Location: "Riyadh, Saudi Arabia",
      Ignition: "ON",
      Fuel: 160,
    },
    {
      Time: "2024-09-08 02:30",
      Speed: 90,
      Location: "Dammam, Saudi Arabia",
      Ignition: "ON",
      Fuel: 150,
    },
    {
      Time: "2024-09-09 03:00",
      Speed: 70,
      Location: "Doha, Qatar",
      Ignition: "ON",
      Fuel: 145,
    },
    {
      Time: "2024-09-09 03:30",
      Speed: 0,
      Location: "Rest Stop, Qatar",
      Ignition: "OFF",
      Fuel: 144,
    },
    {
      Time: "2024-09-10 04:00",
      Speed: 80,
      Location: "Kuwait City, Kuwait",
      Ignition: "ON",
      Fuel: 130,
    },
    {
      Time: "2024-09-10 04:30",
      Speed: 65,
      Location: "Manama, Bahrain",
      Ignition: "ON",
      Fuel: 125,
    },
  ];

  const TruckHistoryColumn = ["Time", "Speed", "Location", "Ignition", "Fuel"];

  const ViolationColumn = ["Time", "Type", "Location"];

  const ViolationRow = [
    {
      Time: "2024-09-01 08:00",
      Type: "Speeding",
      Location: "Dubai, UAE",
    },
    {
      Time: "2024-09-01 09:30",
      Type: "Red Light Violation",
      Location: "Abu Dhabi, UAE",
    },
    {
      Time: "2024-09-02 10:15",
      Type: "Illegal Parking",
      Location: "Sharjah, UAE",
    },
    {
      Time: "2024-09-03 12:00",
      Type: "Lane Change Violation",
      Location: "Ajman, UAE",
    },
    {
      Time: "2024-09-05 14:45",
      Type: "Speeding",
      Location: "Muscat, Oman",
    },
    {
      Time: "2024-09-06 15:30",
      Type: "Red Light Violation",
      Location: "Sohar, Oman",
    },
    {
      Time: "2024-09-07 16:00",
      Type: "No Seatbelt",
      Location: "Riyadh, Saudi Arabia",
    },
    {
      Time: "2024-09-10 17:15",
      Type: "DUI",
      Location: "Jeddah, Saudi Arabia",
    },
    {
      Time: "2024-09-11 18:30",
      Type: "Speeding",
      Location: "Kuwait City, Kuwait",
    },
    {
      Time: "2024-09-12 19:00",
      Type: "Reckless Driving",
      Location: "Doha, Qatar",
    },
    {
      Time: "2024-09-13 20:00",
      Type: "Driving Without License",
      Location: "Manama, Bahrain",
    },
    {
      Time: "2024-09-14 21:30",
      Type: "Speeding",
      Location: "Cairo, Egypt",
    },
    {
      Time: "2024-09-15 22:45",
      Type: "Lane Change Violation",
      Location: "Tunis, Tunisia",
    },
    {
      Time: "2024-09-16 23:00",
      Type: "Red Light Violation",
      Location: "Algiers, Algeria",
    },
    {
      Time: "2024-09-17 08:15",
      Type: "No Seatbelt",
      Location: "Casablanca, Morocco",
    },
    {
      Time: "2024-09-18 09:30",
      Type: "Driving Without Insurance",
      Location: "Tripoli, Libya",
    },
    {
      Time: "2024-09-19 10:45",
      Type: "Traffic Obstruction",
      Location: "Sanaa, Yemen",
    },
    {
      Time: "2024-09-20 11:30",
      Type: "Speeding",
      Location: "Kuwait City, Kuwait",
    },
    {
      Time: "2024-09-21 12:15",
      Type: "Reckless Driving",
      Location: "Muscat, Oman",
    },
    {
      Time: "2024-09-22 13:00",
      Type: "Illegal Parking",
      Location: "Dubai, UAE",
    },
  ];

  return (
    <div className="flex h-[calc(100vh-64px)]">
      {/* Left half: Vehicle information and TripsTable */}
      <div className="w-3/5  bg-gray-100 p-4 overflow-y-auto custom-scrollbar">
        {/* Vehicle Information */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Vehicle Information</h2>
          <p>
            <strong>Number plate:</strong> {vehicleInfo.Numberplate}
          </p>
          <p>
            <strong>Type:</strong> {vehicleInfo.Type}
          </p>
          <p>
            <strong>Brand:</strong> {vehicleInfo.Brand}
          </p>
          <p>
            <strong>Model:</strong> {vehicleInfo.Model}
          </p>
          <p>
            <strong>Unique ID:</strong> {vehicleInfo.uniqueID}
          </p>
        </div>

        {/* Trips Table */}

        <AssetsTable col={TripsColumn} row={TripsRow} small={true} />

        <AssetsTable
          col={TruckHistoryColumn}
          row={TruckHistoryRow}
          small={true}
        />

        <AssetsTable col={ViolationColumn} row={ViolationRow} small={true} />
      </div>

      {/* Right half: Map */}
      <div className="w-2/5 p-10 h-full bg-white">
        <div className="h-[calc(80vh-64px)]">
          {/* Placeholder for map */}
          <iframe
            className="w-full h-full rounded-lg shadow-2xl"
            title="Map"
            src="https://maps.google.com/maps?q=51.5074,0.1278&z=10&output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Asset;
