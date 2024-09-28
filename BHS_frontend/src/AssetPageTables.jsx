import React from "react";

const AssetPageTables = ({ col, row }) => {
  return (
    <div className="container mx-auto px-4 py-8 w-full my-8">
      <div className="shadow-2xl">
        {/* Table wrapper with scrollable area */}
        <div className="overflow-x-auto custom-scrollbar max-h-96">
          {/* Full table, including both the head and body in the scrollable area */}
          <table className="table-auto w-full text-sm bg-white rounded-lg">
            <thead className="sticky top-0 bg-gray-300 z-10">
              <tr className="text-left">
                {col.map((item, index) => (
                  <th className="px-4 py-3 font-bold text-center">{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {row.map((r, index) => (
                <tr key={index} className="border-b text-center">
                  {Object.values(r).map((value, idx) => (
                    <td key={idx} className="px-4 py-3">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssetPageTables;
