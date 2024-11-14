// Home.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Banner from '../components/Banner.jsx';
import MealList from '../components/MealList.jsx';
import Footer from '../components/Footer.jsx';
import { getRandomEggRecipes } from '../RecipeController';
import '../styles/HomePage.css';

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate(); // Initialize navigate function from React Router

  useEffect(() => {
    const fetchRecommendedEggRecipes = async () => {
      try {
        const eggRecipes = await getRandomEggRecipes();
        setRecipes(eggRecipes);
      } catch (error) {
        console.error("Error fetching recommended recipes:", error);
      }
    };

    //uncomment this to get a full functional recipe
    // fetchRecommendedEggRecipes();
  }, []);

  // Handle search and redirect to the single recipe page
  const handleSearch = (query) => {
    // Use navigate to redirect to the /recipes page with the search query as a URL parameter
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
