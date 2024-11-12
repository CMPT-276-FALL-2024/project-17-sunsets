// MealList.jsx
import React from 'react';
import MealItem from './Recipe_MealItem.jsx';

const MealList = ({ recipes, className }) => {
    return (
        <div className={`recipe-meal-wrapper ${className}`}>
            <div className="recipe-meal-result">
                <h2 className="recipe-title">Your Search Results:</h2>
                <div id="recipe-meal">
                    {recipes.map(recipe => (
                        <MealItem key={recipe.id} recipe={recipe} className={className} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MealList;
