// components/MealItem.jsx
import React from 'react';

function MealItem({ recipe, className }) {
  return (
    <div className={`${className}-meal-item`}>
      <div className={`${className}-meal-img`}>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <div className={`${className}-meal-name`}>
        <button className={`${className}-btn`}><i className="far fa-heart"></i></button>
        <h3>{recipe.title}</h3>
      </div>
    </div>
  );
}

export default MealItem;
