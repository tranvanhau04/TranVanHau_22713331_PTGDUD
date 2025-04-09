import React, { useState } from 'react';
import { ShoppingCart, DollarSign, UserPlus, ChevronUp, X } from 'lucide-react';

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
  const [showModal, setShowModal] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    customerName: '',
    company: '',
    value: '',
    date: '',
    status: 'New',
    avatar: '',
  });
  const [avatarPreview, setAvatarPreview] = useState(null);

  const handleChange = (field, value) => {
    setNewCustomer((prev) => ({ ...prev, [field]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarPreview(imageUrl);
      handleChange('avatar', imageUrl);
    }
  };

  const handleAddCustomer = async () => {
    try {
      const response = await fetch('https://67f61a66913986b16fa6b21d.mockapi.io/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCustomer),
      });

      if (!response.ok) throw new Error('Failed to add customer');

      setShowModal(false);
      setNewCustomer({
        customerName: '',
        company: '',
        value: '',
        date: '',
        status: 'New',
        avatar: '',
      });
      setAvatarPreview(null);
    } catch (err) {
      console.error(err);
      alert('Error adding customer');
    }
  };

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
            className={`relative p-5 rounded-xl ${card.bg} shadow-sm cursor-pointer`}
            onClick={() => {
              if (card.title === 'New customer') setShowModal(true);
            }}
          >
            <div className="absolute top-4 right-4 bg-white rounded-[8px] p-1 border border-blue-500">
              {card.icon}
            </div>
            <p className="text-sm font-semibold text-gray-700 mb-2">{card.title}</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{card.value}</h3>
            <div className="flex items-center text-sm text-green-600 font-medium">
              <ChevronUp size={14} className="mr-1" />
              {card.change}
              <span className="ml-1 text-gray-500 font-normal">period of change</span>
            </div>
          </div>
        ))}
      </div>

      
      {showModal && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-[400px] max-w-full p-6 relative animate-fade-in">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              onClick={() => setShowModal(false)}
            >
              <X size={20} />
            </button>
            <h2 className="text-lg font-bold mb-5 text-gray-800 text-center">
              ➕ Add New Customer
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Customer Name
                </label>
                <input
                  type="text"
                  className="w-full bg-pink-50 border px-4 py-2 text-black rounded-lg text-sm focus:ring-2 focus:ring-pink-400 outline-none"
                  value={newCustomer.customerName}
                  onChange={(e) => handleChange('customerName', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full bg-pink-50 border px-4 py-2 text-black rounded-lg text-sm focus:ring-2 focus:ring-pink-400 outline-none"
                  value={newCustomer.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Order Value
                </label>
                <input
                  type="number"
                  className="w-full bg-pink-50 border px-4 py-2 text-black rounded-lg text-sm focus:ring-2 focus:ring-pink-400 outline-none"
                  value={newCustomer.value}
                  onChange={(e) => handleChange('value', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Order Date
                </label>
                <input
                  type="date"
                  className="w-full bg-pink-50 border px-4 py-2 text-black rounded-lg text-sm focus:ring-2 focus:ring-pink-400 outline-none"
                  value={newCustomer.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Avatar
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-pink-100 file:text-pink-700 hover:file:bg-pink-200"
                />
                {avatarPreview && (
                  <img
                    src={avatarPreview}
                    alt="Avatar Preview"
                    className="w-16 h-16 rounded-full mt-2 border"
                  />
                )}
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCustomer}
                className="px-4 py-2 text-sm bg-pink-500 text-white rounded-lg hover:bg-pink-600"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OverviewCards;
