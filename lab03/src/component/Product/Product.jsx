import React from "react";
import "./Product.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShare, FaRegBookmark } from "react-icons/fa";
import user_icon from "../../images/user_icon.png";
import product1 from "../../images/product1.png";
import product2 from "../../images/product2.png";
import product3 from "../../images/product3.png";
import product4 from "../../images/product4.png";
import product5 from "../../images/product5.png";
import product6 from "../../images/product6.png";
import product7 from "../../images/product7.png";
import product8 from "../../images/product8.png";

const recipes = [
  { id: 1, name: "Italian-style tomato salad", time: "14 minutes", image: product1 },
  { id: 2, name: "Vegetable and shrimp spaghetti", time: "15 minutes", image: product2 },
  { id: 3, name: "Lotus delight salad", time: "20 minutes", image: product3 },
  { id: 4, name: "Snack cakes", time: "21 minutes", image: product4 },
  { id: 5, name: "Salad with cabbage and shrimp", time: "32 minutes", image: product5 },
  { id: 6, name: "Bean, shrimp, and potato salad", time: "32 minutes", image:   product6 },
  { id: 7, name: "Sunny-side up fried eggs", time: "32 minutes", image: product7 },
  { id: 8, name: "Lotus delight salad", time: "32 minutes", image: product8 },
];

export default function RecipeBox() {
  return (
    <div className="container lg-4">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <span>Home &gt; </span>
        <span className="text-danger">Your Recipe Box</span>
      </nav>

      {/* Recipe Box Content */}
      <div className="recipe-box">
        <div className="row align-items-center">
          <div className="col-md-2 text-center position-relative">
            {/* Avatar User */}
            <img src={user_icon} alt="User" className="user-img" />
            {/* Tên User trên hình */}
            <div className="username-overlay">Emma Gonzalez</div>
          </div>
          <div className="col-md-8">
            <h2 className="fw-bold">Emma Gonzalez's Recipe Box</h2>
            <p>
              Emma Gonzalez is a deputy editor at Cheffy, bringing her expertise as a former cooking editor at The Los Angeles Times...
            </p>
          </div>
        </div>
        <div>
          <p className="text-danger fw-bold">6.5k Subscribes</p>
          <button className="btn btn-pink">Share <FaShare /></button>
        </div>

        {/* Tab Menu */}
        <div className="tab-menu mt-4">
          <button className="active">Saved Recipes</button>
          <button>Folders</button>
          <button>Recipes by Genevieve</button>
        </div>
      </div>

      {/* Danh sách món ăn */}
      <div className="recipe-container">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            <div className="recipe-info">
              <h3>{recipe.name}</h3>
              <span className="recipe-time">{recipe.time}</span>
              <FaRegBookmark className="bookmark-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
