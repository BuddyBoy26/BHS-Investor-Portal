import React from "react";
import TripsTable from "./TripsTable";

const Trips = () => {
  return (
    <div className="w-full flex flex-col bg-gray-100">
      <h1 className="w-full text-4xl text-center font-bold pb-8 pt-10">
        Trips
      </h1>
      <TripsTable />
    </div>
  );
};

export default Trips;
