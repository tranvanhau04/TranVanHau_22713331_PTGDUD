import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Pencil, X } from "lucide-react";

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
  const [loading, setLoading] = useState(true);
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    fetch("https://67f61a66913986b16fa6b21d.mockapi.io/user")
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch customers:", err);
        setLoading(false);
      });
  }, []);
  

  const handleEditChange = (field, value) => {
    setEditUser((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`https://67f61a66913986b16fa6b21d.mockapi.io/user/${editUser.id}`, {

        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editUser),
      });
  
      if (!response.ok) {
        throw new Error("Failed to update customer");
      }
  
      const updatedUser = await response.json();
  
      // Cập nhật state với dữ liệu từ API trả về
      setCustomers((prev) =>
        prev.map((c) => (c.id === updatedUser.id ? updatedUser : c))
      );
      setEditUser(null);
    } catch (err) {
      console.error(err);
      alert("Error updating user");
    }
  };
  

  const columns = [
    {
      name: "",
      cell: () => <input type="checkbox" />,
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
          <Pencil
            size={16}
            className="text-gray-400 hover:text-gray-600 cursor-pointer ml-2"
            onClick={() => setEditUser(row)}
          />
        </div>
      ),
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: "64px",
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
        progressPending={loading}
        highlightOnHover
        striped
        className="rounded-lg shadow"
      />

      {/* Edit Modal */}
      {editUser && (
  <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
    <div className="bg-white rounded-2xl shadow-2xl w-[400px] max-w-full p-6 relative pointer-events-auto animate-fade-in">
      {/* Close button */}
      <button
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        onClick={() => setEditUser(null)}
      >
        <X size={20} />
      </button>

      {/* Modal Title */}
      <h2 className="text-lg font-bold mb-5 text-gray-800 text-center">
        ✏️ Edit Customer
      </h2>

      {/* Input fields */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name</label>
          <input
            type="text"
            className="w-full bg-pink-50 border px-4 py-2 text-black rounded-lg text-sm focus:ring-2 focus:ring-pink-400 outline-none"
            value={editUser.customerName}
            onChange={(e) => handleEditChange("customerName", e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
          <input
            type="text"
            className="w-full bg-pink-50 border px-4 py-2 text-black rounded-lg text-sm focus:ring-2 focus:ring-pink-400 outline-none"
            value={editUser.company}
            onChange={(e) => handleEditChange("company", e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Order Value</label>
          <input
            type="number"
            className="w-full bg-pink-50 border px-4 py-2 text-black rounded-lg text-sm focus:ring-2 focus:ring-pink-400 outline-none"
            value={editUser.value}
            onChange={(e) => handleEditChange("value", e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Order Date</label>
          <input
            type="date"
            className="w-full bg-pink-50 border px-4 py-2 text-black rounded-lg text-sm focus:ring-2 focus:ring-pink-400 outline-none"
            value={editUser.date.split("T")[0]}
            onChange={(e) => handleEditChange("date", e.target.value)}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-2 mt-6">
        <button
          onClick={() => setEditUser(null)}
          className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 text-sm bg-pink-500 text-white rounded-lg hover:bg-pink-600"
        >
          Save
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default CustomDataTable;
