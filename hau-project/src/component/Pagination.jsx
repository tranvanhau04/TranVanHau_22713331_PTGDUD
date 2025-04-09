import React from "react";

const Pagination = () => (
  <div className="flex justify-between items-center mt-6 px-4">
    {/* Total results */}
    <div className="text-sm text-gray-600">63 results</div>

    {/* Pagination controls */}
    <div className="flex items-center space-x-2">
      <button className="text-gray-400 hover:text-gray-600">&lt;</button>

      <button className="bg-pink-400 text-white h-8 w-8 rounded-full text-sm font-medium">
        1
      </button>
      <button className="bg-gray-100 text-gray-600 h-8 w-8 rounded-full text-sm font-medium">
        2
      </button>
      <button className="bg-gray-100 text-gray-600 h-8 w-8 rounded-full text-sm font-medium">
        3
      </button>
      <button className="bg-gray-100 text-gray-600 h-8 w-8 rounded-full text-sm font-medium">
        4
      </button>
      <span className="text-gray-400">...</span>
      <button className="bg-gray-100 text-gray-600 h-8 w-8 rounded-full text-sm font-medium">
        10
      </button>
      <button className="bg-gray-100 text-gray-600 h-8 w-8 rounded-full text-sm font-medium">
        11
      </button>

      <button className="text-gray-400 hover:text-gray-600">&gt;</button>
    </div>
  </div>
);

export default Pagination;
