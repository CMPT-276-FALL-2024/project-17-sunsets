// HomePage.jsx
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import Banner from '../components/Banner.jsx';
import MealList from '../components/MealList.jsx';
import Footer from '../components/Footer.jsx';
import { getRandomEggRecipes } from '../RecipeController';
import '../styles/HomePage.css';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecommendedEggRecipes = async () => {
      try {
        const eggRecipes = await getRandomEggRecipes();
        setRecipes(eggRecipes);
      } catch (error) {
        console.error("Error fetching recommended recipes:", error);
      }
    };

    fetchRecommendedEggRecipes();
  }, []);

  // Handle search and redirect to the recipe page
  const handleSearch = (query) => {
    window.location.href = `/recipe-page?search=${encodeURIComponent(query)}`;
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
