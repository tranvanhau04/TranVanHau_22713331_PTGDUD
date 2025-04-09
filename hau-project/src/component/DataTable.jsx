import React from 'react';
import { Pencil } from 'lucide-react';

const customers = [
  {
    name: 'Elizabeth Lee',
    company: 'AvatarSystems',
    orderValue: '$359',
    orderDate: '10/07/2023',
    status: 'New',
    avatar: 'https://i.pravatar.cc/40?img=1',
  },
  {
    name: 'Carlos Garcia',
    company: 'SmoozeShift',
    orderValue: '$747',
    orderDate: '24/07/2023',
    status: 'New',
    avatar: 'https://i.pravatar.cc/40?img=2',
  },
  {
    name: 'Elizabeth Bailey',
    company: 'Prime Time Telecom',
    orderValue: '$564',
    orderDate: '08/08/2023',
    status: 'In-progress',
    avatar: 'https://i.pravatar.cc/40?img=3',
  },
  {
    name: 'Ryan Brown',
    company: 'OmniTech Corporation',
    orderValue: '$541',
    orderDate: '31/08/2023',
    status: 'In-progress',
    avatar: 'https://i.pravatar.cc/40?img=4',
  },
  {
    name: 'Ryan Young',
    company: 'DataStream Inc.',
    orderValue: '$769',
    orderDate: '01/05/2023',
    status: 'Completed',
    avatar: 'https://i.pravatar.cc/40?img=5',
  },
  {
    name: 'Hailey Adams',
    company: 'FlowRush',
    orderValue: '$922',
    orderDate: '10/06/2023',
    status: 'Completed',
    avatar: 'https://i.pravatar.cc/40?img=6',
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case 'New':
      return 'bg-blue-100 text-blue-600';
    case 'In-progress':
      return 'bg-yellow-100 text-yellow-600';
    case 'Completed':
      return 'bg-green-100 text-green-600';
    default:
      return '';
  }
};

const DataTable = () => (
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

    {customers.map((c, index) => (
      <div key={index} className="grid grid-cols-6 items-center gap-9 p-4 border-t">
        <input type="checkbox" />
        <div className="flex items-center gap-2">
          <img src={c.avatar} alt={c.name} className="w-8 h-8 rounded-full" />
          <span className="font-medium text-gray-700">{c.name}</span>
        </div>
        <div className="text-sm text-gray-600">{c.company}</div>
        <div className="text-sm font-medium text-gray-800">{c.orderValue}</div>
        <div className="text-sm text-gray-600">{c.orderDate}</div>
        <div className="flex items-center justify-between">
          <span className={`text-xs px-3 py-1 rounded-full ${getStatusStyle(c.status)}`}>
            {c.status}
          </span>
          <Pencil size={16} className="text-gray-400 hover:text-gray-600 cursor-pointer ml-2" />
        </div>
      </div>
    ))}
  </div>
</div>

  </div>
);

export default DataTable;
