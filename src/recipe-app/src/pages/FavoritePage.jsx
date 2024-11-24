// Recipes.jsx
import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import SearchBar from "../components/Recipe_SearchBar.jsx";
import "../styles/RecipePage.css";
import "../styles/HomePage.css";
import "../styles/FavoritePage.css";
import food from "../assets/images/food.jpg";
import { processLoadSavedRecipes, processDeleteRecipe } from "../RecipeController.jsx";

const FavoritePage = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const loadSavedRecipes = async () => {
      const loadedRecipes = await processLoadSavedRecipes();
      setSavedRecipes(loadedRecipes);
    };
    loadSavedRecipes();
  }, []);

  const handleUnsaveRecipe = (recipe) => {
    const updatedRecipes = savedRecipes.filter(savedRecipe => savedRecipe.id !== recipe.id);
    setSavedRecipes(updatedRecipes); 
    processDeleteRecipe(recipe); 
  };

  return (
    <div className="page-container">
      <Navbar className="favorite" />
      <SearchBar className="recipe" />

      <div className="favorite-content">
        <h1 className="favorite-title">Your Favorite Recipes: </h1>

        {/* Make sure the content is in the this div*/}
        <div id="recipe-meal">
          {/* The content below just use for testing the layout  */}
          {savedRecipes.length > 0 ? (
            savedRecipes.map((recipe) => (
              <div className="home-meal-item">
                <div className="home-meal-img">
                  <img src={recipe.image} alt={recipe.title} />
                </div>
                <div className="home-meal-name">
                <button className="home-btn" onClick={() => handleUnsaveRecipe(recipe)}><i className={saved ? 'fas fa-heart' : 'far fa-heart'}></i></button>
                  <h3>{recipe.title}</h3>
                </div>
              </div>
            ))
          ) : (
            <p>No Favourited Recipes</p>
          )}
        </div>
      </div>

      <Footer className="home" />
    </div>
  );
};
export default FavoritePage;
