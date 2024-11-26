import React from 'react';
import { Link } from 'react-router-dom';

const MealItem = ({ recipe, className }) => {
    return (
        <div className={`recipe-meal-item ${className}`}>
            <div className="recipe-meal-img">
                <img src={recipe.image} alt={recipe.title} />
            </div>
            <div className="recipe-meal-name">
                <h3>{recipe.title}</h3>
                <Link 
                    to={`/recipe/${recipe.id}`} 
                    state={{ id: recipe.id, image: recipe.image }} // Pass id and image via state
                    className="recipe-btn"
                >
                    Get Recipe
                </Link>
            </div>
        </div>
    );
};

export default MealItem;
