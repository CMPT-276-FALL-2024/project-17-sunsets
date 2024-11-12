// MealItem.jsx
import React from 'react';

const MealItem = ({ recipe, className }) => {
    return (
        <div className={`recipe-meal-item ${className}`}>
            <div className="recipe-meal-img">
                <img src={recipe.image} alt={recipe.title} /> 
            </div>
            <div className="recipe-meal-name">
                <h3>{recipe.title}</h3>
                <a href={`/recipe/${recipe.id}`} className="recipe-btn">Get Recipe</a>
            </div>
        </div>
    );
};

export default MealItem;
