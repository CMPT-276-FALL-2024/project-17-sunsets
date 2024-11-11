// components/MealItem.jsx
import React from 'react';
import mealImage from '../assets/images/food.jpg';

function MealItem() {
  return (
    <div className="meal-item">
      <div className="meal-img">
        <img src={mealImage} alt="food" />
      </div>
      <div className="meal-name">
        <button className="btn"><i className="far fa-heart"></i></button>
        <h3>Potato Chips</h3>
      </div>
    </div>
  );
}

export default MealItem;
