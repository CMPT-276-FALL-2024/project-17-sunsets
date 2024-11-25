// Recipes.jsx
import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import SearchBar from "../components/Recipe_SearchBar.jsx";
import "../styles/RecipePage.css";
import "../styles/HomePage.css";
import "../styles/FavoritePage.css";

const FavoritePage = () => {
  return (
    <div className="page-container">
      <Navbar className="favorite" />
      <SearchBar className="recipe" />

      <div className="favorite-content">
        <div id="recipe-meal">
          
        </div>
      </div>

      <Footer className="home" />
    </div>
  );
};
export default FavoritePage;
