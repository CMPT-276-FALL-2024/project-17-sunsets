// components/MealList.jsx
import React from 'react';
import MealItem from './MealItem.jsx';

function MealList() {
  return (
    <section className="container">
      <div className="meal-wrapper">
        <h2>Recommended Recipes</h2>
        <div id="meal">
          <MealItem />
          <MealItem />
          <MealItem />
        </div>
      </div>
    </section>
  );
}

export default MealList;
