// components/FavoriteContent.jsx
import React from "react";
import NoImageAvailable from '../assets/images/No_Image_Available.jpg';

const FavoriteContent = ({ savedRecipes, handleClick, handleUnsaveRecipe }) => {
  return (
    <div className="favorite-content">
      <h1 className="favorite-title">Your Favorite Recipes</h1>

      <div id="recipe-meal">
        {savedRecipes.length > 0 ? (
          savedRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="home-meal-item"
              onClick={() => handleClick(recipe)}
            >
              <div className="home-meal-img">
                <img src={recipe.image || NoImageAvailable} alt={recipe.title} />
              </div>
              <div className="home-meal-name">
                <button
                  className="home-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent navigation when unsaving
                    handleUnsaveRecipe(recipe);
                  }}
                >
                  <i className="fas fa-heart"></i>
                </button>
                <h3>{recipe.title}</h3>
              </div>
            </div>
          ))
        ) : (
          <p>No Favorited Recipes</p>
        )}
      </div>
    </div>
  );
};

export default FavoriteContent;
