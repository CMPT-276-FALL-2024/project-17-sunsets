// Recipes.jsx
import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import SearchBar from "../components/Recipe_SearchBar.jsx";
import FavoriteContent from "../components/FavoriteContent.jsx"; 
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
    alert("Recipe Unfavorited");
  };

  const handleClick = (recipe) => {
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <div className="page-container">
      <Navbar className="favorite" />
      <SearchBar className="recipe" />
      <FavoriteContent
        savedRecipes={savedRecipes}
        handleClick={handleClick}
        handleUnsaveRecipe={handleUnsaveRecipe}
      />
      <Footer className="home" />
    </div>
  );
};
export default FavoritePage;
