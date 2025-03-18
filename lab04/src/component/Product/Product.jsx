import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaChevronLeft, FaChevronRight, FaRegBookmark } from "react-icons/fa";
import product1 from "../../images/product1.png";
export default function Filters() {
  const [isOpen, setIsOpen] = useState({
    type: true,
    time: true,
    rating: true,
  });

  const recipes = Array(32).fill({
    name: "Salad with cabbage and shrimp",
    time: "32 minutes",
    img: product1,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(recipes.length / itemsPerPage);
  const paginatedRecipes = recipes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const [selectedTypes, setSelectedTypes] = useState([]);
  const [timeRange, setTimeRange] = useState([30, 50]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleRatingChange = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating) ? prev.filter((r) => r !== rating) : [...prev, rating]
    );
  };

  return (
    <div className="flex gap-4 translate-x-[100px] mt-[100px]">
      {/* Sidebar Filters */}
      <div className="w-80 bg-white p-5 shadow-md rounded-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg flex items-center">
            <span className="mr-2">☰</span> FILTERS
          </h2>
        </div>

        {/* Type Section */}
        <div className="border-b pb-3">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsOpen({ ...isOpen, type: !isOpen.type })}
          >
            <h3 className="font-semibold">Type</h3>
            {isOpen.type ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {isOpen.type && (
            <div className="mt-2 grid grid-cols-2 gap-2">
              {["Pan-fried", "Grilled", "Sauteed", "Steamed", "Stir-fried", "Roasted", "Baked", "Stewed"].map((item, idx) => (
                <label key={idx} className="flex items-center space-x-2 text-gray-700">
                  <input
                    type="checkbox"
                    className="accent-pink-500"
                    checked={selectedTypes.includes(item)}
                    onChange={() => handleTypeChange(item)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Time Section */}
        <div className="border-b pb-3 mt-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsOpen({ ...isOpen, time: !isOpen.time })}
          >
            <h3 className="font-semibold">Time</h3>
            {isOpen.time ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {isOpen.time && (
            <div className="mt-3">
              <input
                type="range"
                className="w-full accent-pink-500 mt-2"
                min="10"
                max="90"
                step="5"
                value={timeRange[1]}
                onChange={(e) => setTimeRange([timeRange[0], parseInt(e.target.value)])}
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>{timeRange[0]} minutes</span>
                <span>{timeRange[1]} minutes</span>
              </div>
            </div>
          )}
        </div>

        {/* Rating Section */}
        <div className="pb-3 mt-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsOpen({ ...isOpen, rating: !isOpen.rating })}
          >
            <h3 className="font-semibold">Rating</h3>
            {isOpen.rating ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {isOpen.rating && (
            <div className="mt-3 space-y-2">
              {[5, 4, 3, 2, 1].map((stars, idx) => (
                <label key={idx} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="accent-pink-500"
                    checked={selectedRatings.includes(stars)}
                    onChange={() => handleRatingChange(stars)}
                  />
                  <div className="flex text-yellow-400">
                    {"★".repeat(stars)}
                    {"☆".repeat(5 - stars)}
                  </div>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Apply Button */}
        <button className="w-full mt-4 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition duration-300">
          Apply
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 translate-x-[200px]">
        <h2 className="font-bold text-2xl mb-4">Salad ({recipes.length})</h2>

        <div className="grid grid-cols-3 !gap-2">
          {paginatedRecipes.map((recipe, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <img src={recipe.img} alt={recipe.name} className="rounded-lg mb-4 w-40 h-20" />
              <h3 className="font-semibold">{recipe.name}</h3>
              <p className="text-pink-500 text-sm">{recipe.time}</p>
              <button className="mt-2 text-pink-500 hover:text-pink-600">
                <FaRegBookmark />
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-6 space-x-2">
          <button
            className={`p-2 rounded-lg ${currentPage === 1 ? "opacity-50" : "bg-gray-200 hover:bg-gray-300"}`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <FaChevronLeft />
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded-lg ${currentPage === i + 1 ? "bg-pink-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className={`p-2 rounded-lg ${currentPage === totalPages ? "opacity-50" : "bg-gray-200 hover:bg-gray-300"}`}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <FaChevronRight />
          </button>
        </div>
      </main>
    </div>
  );
}
