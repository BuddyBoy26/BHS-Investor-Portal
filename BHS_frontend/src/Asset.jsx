import React from "react";
import AssetPageTables from "./AssetPageTables";

const Asset = () => {
  const vehicleInfo = {
    name: "AB-1234",
    unitType: "Vehicle",
    deviceType: "Teltonika FMC130",
    serverAddress: "nl2.gpsgsm.org:21860",
    uniqueID: "123456789012345",
  };

  return (
    <div className="flex h-[calc(100vh-64px)]">
      {/* Left half: Vehicle information and TripsTable */}
      <div className="w-3/5  bg-gray-100 p-4 overflow-y-auto custom-scrollbar">
        {/* Vehicle Information */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Vehicle Information</h2>
          <p>
            <strong>Name:</strong> {vehicleInfo.name}
          </p>
          <p>
            <strong>Unit type:</strong> {vehicleInfo.unitType}
          </p>
          <p>
            <strong>Device type:</strong> {vehicleInfo.deviceType}
          </p>
          <p>
            <strong>Server address:</strong> {vehicleInfo.serverAddress}
          </p>
          <p>
            <strong>Unique ID:</strong> {vehicleInfo.uniqueID}
          </p>
        </div>

        {/* Trips Table */}
        <AssetPageTables />
      </div>

      {/* Right half: Map */}
      <div className="w-2/5 h-full bg-white">
        <div className="h-full">
          {/* Placeholder for map */}
          <iframe
            className="w-full h-full"
            title="Map"
            src="https://maps.google.com/maps?q=51.5074,0.1278&z=10&output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Asset;
