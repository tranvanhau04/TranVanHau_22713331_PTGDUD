import React from 'react';
import { ShoppingCart, DollarSign, UserPlus, ChevronUp } from 'lucide-react';

const data = [
  {
    title: 'Turnover',
    value: '$92,405',
    change: '5.39%',
    icon: <ShoppingCart size={20} className="text-pink-500" />,
    bg: 'bg-pink-50',
  },
  {
    title: 'Profit',
    value: '$32,218',
    change: '5.39%',
    icon: <DollarSign size={20} className="text-blue-500" />,
    bg: 'bg-blue-50',
  },
  {
    title: 'New customer',
    value: '298',
    change: '6.84%',
    icon: <UserPlus size={20} className="text-blue-500" />,
    bg: 'bg-blue-50',
  },
];

const OverviewCards = () => {
  return (
    <div className="mb-6">
    
      <div className="flex items-center gap-2 mb-4">
      <img src="./Squares four 1.png" alt="Overview Icon" className="w-5 h-5" />
        <h2 className="text-lg font-semibold text-black">Overview</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((card, index) => (
          <div
            key={index}
            className={`relative p-5 rounded-xl ${card.bg} shadow-sm`}
          >
            {/* Icon */}
            <div className={`absolute top-4 right-4 bg-white rounded-[8px] p-1 border 
  ${card.title === 'Turnover' ? 'border-pink-500' : ''}
  ${card.title === 'Profit' ? 'border-blue-500' : ''}
  ${card.title === 'New customer' ? 'border-blue-500' : ''}
`}>
  {card.icon}
</div>


            {/* Title */}
            <p className="text-sm font-semibold text-gray-700 mb-2">
              {card.title}
            </p>

            {/* Value */}
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {card.value}
            </h3>

            {/* Change */}
            <div className="flex items-center text-sm text-green-600 font-medium">
              <ChevronUp size={14} className="mr-1" />
              {card.change}
              <span className="ml-1 text-gray-500 font-normal">
                period of change
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewCards;
