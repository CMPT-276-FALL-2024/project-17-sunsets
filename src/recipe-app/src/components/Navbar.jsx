// import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navdiv">
        <span className="menu-bar">
          <i className="fa-solid fa-bars"></i>
        </span>
        <a href="#home" className="active">Home</a>
        <a href="#Recipe">Recipe</a>
        <a href="#Favorites">Favorites</a>
        <a href="#MealPlanner">Meal Planner</a>
        <span className="profile-icon">
          <i className="fa-regular fa-user"></i>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
