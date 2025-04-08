import React from 'react';
const DataTable = () => (
    <div>
      <div className="flex bg-green-100 justify-between items-center mb-4">
        <div className="h-6 w-32 bg-gray-300 rounded"></div>
        <div className="flex space-x-2">
          <div className="h-8 w-20 bg-pink-200 rounded-lg"></div>
          <div className="h-8 w-20 bg-pink-200 rounded-lg"></div>
        </div>
      </div>
  
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="grid grid-cols-6 gap-4 bg-gray-100 p-4 text-sm font-semibold">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-4 w-24 bg-gray-400 rounded"></div>
          ))}
        </div>
  
        {[...Array(6)].map((_, i) => (
          <div key={i} className="grid grid-cols-6 items-center gap-4 p-4 border-t">
            <div className="h-4 w-4 bg-gray-300 rounded"></div>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gray-300"></div>
              <div className="h-4 w-20 bg-gray-300 rounded"></div>
            </div>
            <div className="h-4 w-24 bg-gray-300 rounded"></div>
            <div className="h-4 w-20 bg-gray-300 rounded"></div>
            <div className="h-4 w-24 bg-gray-300 rounded"></div>
            <div className="h-6 w-20 bg-blue-200 rounded-full text-center"></div>
          </div>
        ))}
      </div>
    </div>
  );
  
  export default DataTable;
  