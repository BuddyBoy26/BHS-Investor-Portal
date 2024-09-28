import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const AssetsTable = ({ row, col, clickable = false }) => {
  const navigate = useNavigate();
  const tableBodyRef = useRef(null);
  const tableHeaderRef = useRef(null);

  const handleRowClick = (item) => {
    if (clickable) {
      navigate("/asset", { state: { assetData: item } });
    }
  };

  const formatValueAdded = (value) => {
    if (value > 0) {
      return `+${value}`;
    }
    return value;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (tableHeaderRef.current && tableBodyRef.current) {
        tableHeaderRef.current.scrollLeft = tableBodyRef.current.scrollLeft;
      }
    };

    const tableBody = tableBodyRef.current;
    if (tableBody) {
      tableBody.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (tableBody) {
        tableBody.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const renderTableContent = (isHeader = false) => (
    <table className="w-full text-sm">
      {isHeader ? (
        <thead className="bg-gray-800 text-white">
          <tr>
            {col.map((item, index) => (
              <th key={index} className="px-6 py-4 font-semibold text-center ">
                {item}
              </th>
            ))}
            {clickable && <th className="w-10"></th>}
          </tr>
        </thead>
      ) : (
        <tbody>
          {row.map((r, index) => (
            <tr
              key={index}
              className={`border-b  transition-colors duration-200 ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } ${clickable ? "cursor-pointer hover:bg-gray-200" : ""}`}
              onClick={() => handleRowClick(r)}
            >
              {Object.entries(r).map(([key, value], idx) => (
                <td
                  key={idx}
                  className={`px-6 text-center py-4 ${
                    key === "ValueAdded"
                      ? value > 0
                        ? "text-green-600 font-semibold"
                        : "text-red-600 font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {key === "ValueAdded" ? formatValueAdded(value) : value}
                </td>
              ))}
              {clickable && (
                <td className="w-10 py-4 whitespace-nowrap text-right">
                  <ChevronRight
                    className="inline-block text-gray-400"
                    size={20}
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );

  return (
    <div className="container mx-auto px-4 py-8 w-5/6 max-h-[80vh]">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200">
        <div
          className="overflow-x-auto invisible-scrollbar"
          ref={tableHeaderRef}
        >
          {renderTableContent(true)}
        </div>
        <div
          className="max-h-[60vh] overflow-y-auto overflow-x-auto custom-scrollbar"
          ref={tableBodyRef}
        >
          {renderTableContent()}
        </div>
      </div>
    </div>
  );
};

export default AssetsTable;
