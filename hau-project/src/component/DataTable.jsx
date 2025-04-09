import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
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

const CustomDataTable = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("/data/db.json")
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data.customers);
      });
  }, []);

  const columns = [
    {
      name: "",
      cell: (row) => <input type="checkbox" />,
      width: "60px",
    },
    {
      name: "CUSTOMER NAME",
      selector: (row) => row.customerName,
      cell: (row) => (
        <div className="flex items-center gap-2">
          <img src={row.avatar} alt={row.customerName} className="w-8 h-8 rounded-full" />
          <span className="font-medium text-gray-700">{row.customerName}</span>
        </div>
      ),
      sortable: true,
    },
    {
      name: "COMPANY",
      selector: (row) => row.company,
      sortable: true,
    },
    {
      name: "ORDER VALUE",
      selector: (row) => `$${row.value}`,
      sortable: true,
    },
    {
      name: "ORDER DATE",
      selector: (row) => new Date(row.date).toLocaleDateString(),
      sortable: true,
    },
    {
      name: "STATUS",
      cell: (row) => (
        <div className="flex items-center justify-between w-full">
          <span className={`text-xs px-3 py-1 rounded-full ${getStatusStyle(row.status)}`}>
            {row.status}
          </span>
          <Pencil size={16} className="text-gray-400 hover:text-gray-600 cursor-pointer ml-2" />
        </div>
      ),
    },
  ];
  const customStyles = {
    rows: {
      style: {
        minHeight: "64px", // 👈 tăng chiều cao mỗi row
        paddingTop: "12px",
        paddingBottom: "12px",
      },
    },
  };
  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 p-4">
          <img src="./File text 1.png" alt="icon" />
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

      {/* DataTable */}
      <DataTable
        columns={columns}
        data={customers}
        customStyles={customStyles}
        // pagination
        highlightOnHover
        striped
        className="rounded-lg shadow"
      />
    </div>
  );
};

export default CustomDataTable;
