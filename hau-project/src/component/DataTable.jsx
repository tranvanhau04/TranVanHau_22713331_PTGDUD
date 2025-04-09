import React, { useEffect, useState } from "react";
import { Pencil } from "lucide-react";

const getStatusStyle = (status) => {
  switch (status) {
    case "New":
      return "bg-blue-100 text-blue-600";
    case "In-progress":
      return "bg-yellow-100 text-yellow-600";
    case "Completed":
      return "bg-green-100 text-green-600";
    default:
      return "";
  }
};

const DataTable = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch dữ liệu từ API giả
    fetch("/data/db.json") // nếu đặt file JSON ở public/data/customers.json
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data.customers); // lấy đúng key customers
      });
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <img src="./File text 1.png" alt="" />
          <h2 className="text-lg font-semibold text-black">Detailed report</h2>
        </div>
        <div className="flex space-x-2">
          <button className="flex items-center gap-1 border border-pink-500 text-pink-500 text-sm px-3 py-1 rounded-lg hover:bg-pink-50">
            <img src="./Download.png" alt="" className="w-4 h-4" />
            Import
          </button>
          <button className="flex items-center gap-1 border border-pink-500 text-pink-500 text-sm px-3 py-1 rounded-lg hover:bg-pink-50">
            <img src="./Move up.png" alt="" className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="!pl-0 !ml-0 !px-0">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="grid grid-cols-6 gap-4 bg-gray-100 p-4 text-sm font-semibold text-gray-600">
            <div></div>
            <div>CUSTOMER NAME</div>
            <div>COMPANY</div>
            <div>ORDER VALUE</div>
            <div>ORDER DATE</div>
            <div>STATUS</div>
          </div>

          {customers.map((c) => (
            <div
              key={c.id}
              className="grid grid-cols-6 items-center gap-9 p-4 border-t"
            >
              <input type="checkbox" />
              <div className="flex items-center gap-2">
                <img
                  src={c.avatar}
                  alt={c.customerName}
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-medium text-gray-700">
                  {c.customerName}
                </span>
              </div>
              <div className="text-sm text-gray-600">{c.company}</div>
              <div className="text-sm font-medium text-gray-800">
                ${c.value}
              </div>
              <div className="text-sm text-gray-600">
                {new Date(c.date).toLocaleDateString()}
              </div>
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs px-3 py-1 rounded-full ${getStatusStyle(
                    c.status
                  )}`}
                >
                  {c.status}
                </span>
                <Pencil
                  size={16}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer ml-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataTable;
