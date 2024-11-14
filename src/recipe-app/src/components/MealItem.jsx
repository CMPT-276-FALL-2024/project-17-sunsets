// components/MealItem.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function MealItem({ recipe, className }) {
  const navigate = useNavigate();

  // Function to navigate to the SingleRecipe page
  const handleClick = () => {
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <div className={`${className}-meal-item`} onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className={`${className}-meal-img`}>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <div className={`${className}-meal-name`}>
        <button className={`${className}-btn`} onClick={(e) => e.stopPropagation()}>
          <i className="far fa-heart"></i>
        </button>
        <h3>{recipe.title}</h3>
      </div>
    </div>
  );
}

export default MealItem;
