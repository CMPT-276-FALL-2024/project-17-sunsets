// import React from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({className}) {
  return (
    <nav className={`${className}-navbar`}>
      <div className={`${className}-navdiv`}>
        <span className={`${className}-menu-bar`}>
          <i className="fa-solid fa-bars"></i>
        </span>
        <Link to="/" className="home-active">Home</Link>
        <Link to="/recipes" className = "recipe-active">Recipe</Link> {/* Corrected route path */}
        <Link to="/favorites" className = "favorite-active">Favorites</Link>
        <Link to="/mealplanner">Meal Planner</Link>
        <Link to="/tutorials">Tutorials</Link>
        {/* <span className="profile-icon">
          <i className="fa-regular fa-user"></i>
        </span> */}
      </div>
    </nav>
  );
}

export default Navbar;
