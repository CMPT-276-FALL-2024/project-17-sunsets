import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import SearchBar from "../components/Recipe_SearchBar.jsx";
import "../styles/RecipePage.css";
import "../styles/HomePage.css";
import "../styles/FavoritePage.css";
import "../styles/YoutubePage.css";

const FavoritePage = () => {
  return (
    <div className="page-container">
      <Navbar className="youtube" />

      {/* You might want to use your search component here Chaitanya  */}
      <SearchBar className="recipe" />   

      <div className="youtube-content">
        
      </div>

      <Footer className="home" />
    </div>
  );
};
export default FavoritePage;
