/**
 * HomePage Component
 * 
 * This component serves as the landing page of the application. It displays a banner, 
 * a list of random recipes, and allows users to navigate to other pages or search 
 * for recipes. It includes a navigation bar, banner, recipe list, and footer.
 */


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Banner from '../components/Banner.jsx';
import MealList from '../components/MealList.jsx';
import Footer from '../components/Footer.jsx';
import { getRandomEggRecipes, processRandomRecipes } from '../RecipeController';
import '../styles/HomePage.css';
import '../styles/RecipePage.css';

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate(); // Initialize navigate function from React Router

  // Fetch recommended egg recipes on component mount
  useEffect(()=>{
    const fetchRandomRecipes = async () =>{
    try{
      const randomRecipes = await processRandomRecipes();
      console.log(randomRecipes);
      setRecipes(randomRecipes);
    }
    catch(error){
      console.error("Error fetching random recipes:", error);
    }
  };
  fetchRandomRecipes();
  }, []);

  
  /**
   * Handles the search functionality and redirects to the recipes page.
   * 
   * @param {string} query - The search query entered by the user.
   */
  const handleSearch = (query) => {
    navigate(`/recipes?search=${encodeURIComponent(query)}`);
  };

  return (
    <>
      <Navbar className='home' />
      <Banner className='home' onSearch={handleSearch} />
      <MealList recipes={recipes} className='home' />
      <Footer className='home' />
    </>
  );
}

export default HomePage;
