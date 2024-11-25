// Recipes.jsx
import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import SearchBar from "../components/Recipe_SearchBar.jsx";
import "../styles/RecipePage.css";
import "../styles/HomePage.css";
import "../styles/FavoritePage.css";
import { processLoadSavedRecipes, processDeleteRecipe } from "../RecipeController.jsx";
import { useNavigate } from 'react-router-dom';

const FavoritePage = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const navigate = useNavigate();

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

  const handleClick = (recipe) => {
    navigate(`/recipe/${recipe.id}`);
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
              <div key={recipe.id} className="home-meal-item" onClick={() => handleClick(recipe)}>
                <div className="home-meal-img">
                  <img src={recipe.image} alt={recipe.title} />
                </div>
                <div className="home-meal-name">
                <button className="home-btn" onClick={(e) =>{e.stopPropagation();  handleUnsaveRecipe(recipe)}}><i className= 'fas fa-heart'></i></button>
                  <h3>{recipe.title}</h3>
                </div>
              </div>
            ))
          ) : (<p>No Favorited Recipes</p>)}
        </div>
      </div>

      <Footer className="home" />
    </div>
  );
};
export default FavoritePage;
