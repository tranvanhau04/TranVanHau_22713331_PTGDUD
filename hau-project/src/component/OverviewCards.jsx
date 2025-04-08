import React from 'react';
const OverviewCards = () => (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="bg-blue-100 p-4 rounded-lg shadow">
          <div className="h-6 w-24 bg-gray-300 mb-2 rounded"></div>
          <div className="h-8 w-32 bg-gray-500 rounded mb-2"></div>
          <div className="h-4 w-24 bg-green-300 rounded"></div>
        </div>
      ))}
    </div>
  );
  
  export default OverviewCards;
  