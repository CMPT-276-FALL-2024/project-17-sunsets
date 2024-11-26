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

  const handleUnsaveRecipe = (recipe) => {
    const updatedRecipes = savedRecipes.filter(savedRecipe => savedRecipe.id !== recipe.id);
    setSavedRecipes(updatedRecipes); 
    setOriginalRecipes(updatedRecipes); // Update the backup list
    processDeleteRecipe(recipe);
    alert("Recipe Unfavorited");
  };

  const handleClick = (recipe) => {
    navigate(`/recipe/${recipe.id}`);
  };

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
      <SearchBar className="recipe" onSearch={handleSearch} /> {/* Pass the handler */}
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
