/**
 * FavoritePage Component
 * 
 * This component displays the user's favorite recipes. It allows users to search 
 * for recipes within their saved list, view detailed information about a recipe,
 * and remove recipes from their favorites. It also handles navigation between 
 * the favorite page and the recipe detail page.
 */

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
  const [originalRecipes, setOriginalRecipes] = useState([]); // Preserve original list for resetting search
  const navigate = useNavigate();

  useEffect(() => {
    const loadSavedRecipes = async () => {
      const loadedRecipes = await processLoadSavedRecipes();
      setSavedRecipes(loadedRecipes);
      setOriginalRecipes(loadedRecipes); // Keep a backup of the full list
    };
    loadSavedRecipes();
  }, []);

  /**
   * Remove a recipe from the list of saved recipes.
   * 
   * @param {Object} recipe - The recipe object to be removed.
   */
  const handleUnsaveRecipe = (recipe) => {
    const updatedRecipes = savedRecipes.filter(savedRecipe => savedRecipe.id !== recipe.id);
    setSavedRecipes(updatedRecipes); 
    setOriginalRecipes(updatedRecipes); // Update the backup list
    processDeleteRecipe(recipe);
    alert("Recipe Unfavorited");
  };

  /**
   * Navigate to the recipe detail page when a recipe is clicked.
   * 
   * @param {Object} recipe - The recipe object to view details for.
   */
  const handleClick = (recipe) => {
    navigate(`/recipe/${recipe.id}`);
  };

  /**
   * Filter the saved recipes based on a search query.
   * 
   * @param {string} query - The search query entered by the user.
   */
  const handleSearch = (query) => {
    if (!query) {
      setSavedRecipes(originalRecipes); // Reset to original list if the query is empty
    } else {
      const filteredRecipes = originalRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(query.toLowerCase()) // Check if title contains the query
      );
      setSavedRecipes(filteredRecipes);
    }
  };

  return (
    <div className="page-container">
      <Navbar className="favorite" />
      <SearchBar className="recipe" onSearch={handleSearch} /> 
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
