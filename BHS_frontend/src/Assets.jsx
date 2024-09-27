import React from "react";
import AssetsTable from "./AssetsTable";

const Assets = () => {
  return (
    <div className="w-full flex flex-col bg-gray-100">
      <h1 className="w-full text-4xl text-center font-bold pb-8 pt-10">
        Assets
      </h1>
      <AssetsTable click={true} />
    </div>
  );
};

export default Assets;
