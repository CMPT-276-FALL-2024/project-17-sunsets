import React from "react";
import { useNavigate } from "react-router-dom"; 
import Navbar from "../components/Navbar.jsx";
import SearchBar from "../components/Recipe_SearchBar.jsx";
import Footer from "../components/Footer.jsx";
import RecipeDetails from "../components/RecipeDetails.jsx"; 
import "../styles/RecipePage.css";

const SingleRecipe = () => {
  const navigate = useNavigate();

  const handleSearch = (query) => {
    // Redirect to the Recipes page with the search query as a parameter
    navigate(`/recipes?search=${encodeURIComponent(query)}`);
  };

  return (
    <div className="page-container">
      <Navbar className="recipe" />
      <SearchBar className="recipe" onSearch={handleSearch} /> {/* Pass handleSearch as a prop */}
      
      <div className="content">
        <RecipeDetails /> {/* Render the RecipeDetails component */}
      </div>
      
      <Footer className="home" />
    </div>
  );
};

export default SingleRecipe;
