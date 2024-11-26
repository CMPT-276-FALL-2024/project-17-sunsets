// components/MealList.jsx
import React from 'react';
import MealItem from './Recipe_MealItem.jsx';

function MealList({ recipes, className }) {
  return (
    <section className={`${className}-container`}>
      <div className={`${className}-meal-wrapper`}>
        <h2>Recommended Recipes</h2>
        <div id={`recipe-meal`}>
          {recipes.map((recipe) => (
            <MealItem key={recipe.id} recipe={recipe} className="recipe" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MealList;
