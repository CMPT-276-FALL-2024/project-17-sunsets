import React from 'react';
import Navbar from '../components/Navbar.jsx';
import SearchBar from '../components/Recipe_SearchBar.jsx';
import Footer from '../components/Footer.jsx';
import RecipeDetails from '../components/RecipeDetails.jsx'; // Import the new RecipeDetails component
import '../styles/RecipePage.css';

const SingleRecipe = () => {
    return (
        <div className="page-container">
            <Navbar className="recipe" />
            <SearchBar className="recipe" />
            
            <div className="content">
                <RecipeDetails /> {/* Render the RecipeDetails component */}
            </div>
            
            <Footer className="home" />
        </div>
    );
};

export default SingleRecipe;
