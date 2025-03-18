import React from "react";
import logo from "../../images/logo.png";
import './Footer.css';
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4 w-screen">
  <div className=" mx-0 pl-4"> 
        {/* Grid layout for content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* About Us Section (Chiếm 2 cột trên màn hình lớn) */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-white mb-3">About Us</h3>
            <p className="text-sm mb-3">
              Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l-md bg-gray-800 border border-gray-600 text-white focus:outline-none w-full"
              />
              <button className="!bg-pink-500 text-white px-4 py-2 rounded-r-md hover:bg-pink-600">
                Send
              </button>
            </div>
          </div>

          {/* Learn More + Shop Section */}
          <div className="ml-10" >
            <h3 className="font-bold text-white mb-3">Learn More</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Our Cooks</a></li>
              <li><a href="#" className="hover:text-white">See Our Features</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
            <h3 className="font-bold text-white mt-6 mb-3">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Gift Subscription</a></li>
              <li><a href="#" className="hover:text-white">Send Us Feedback</a></li>
            </ul>
          </div>

          {/* Recipes Section */}
          <div className="ml-10">
            <h3 className="font-bold text-white mb-3">Recipes</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">What to Cook This Week</a></li>
              <li><a href="#" className="hover:text-white">Pasta</a></li>
              <li><a href="#" className="hover:text-white">Dinner</a></li>
              <li><a href="#" className="hover:text-white">Healthy</a></li>
              <li><a href="#" className="hover:text-white">Vegetarian</a></li>
              <li><a href="#" className="hover:text-white">Vegan</a></li>
              <li><a href="#" className="hover:text-white">Christmas</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-sm flex flex-col md:flex-row justify-between items-center w-full">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Chefify Logo" className="h-6" />
            <span className="text-white font-bold text-lg">Chefify</span>
          </div>
          <p className="mt-3 md:mt-0">© 2023 Chefify Company</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-white">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
