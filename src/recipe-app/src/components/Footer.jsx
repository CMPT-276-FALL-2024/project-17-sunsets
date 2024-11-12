// components/Footer.jsx
import React from 'react';

function Footer({className}) {
  return (
    <footer className={`${className}-footer`}>
      <div className={`${className}-social`}>
        <a href="#" className={`${className}-github`}><i className="fa-brands fa-github"></i></a>
        <a href="#" className={`${className}-github`}><i className="fa-brands fa-github"></i></a>
        <a href="#" className={`${className}-github`}><i className="fa-brands fa-github"></i></a>
        <a href="#" className={`${className}-github`}><i className="fa-brands fa-github"></i></a>
      </div>
      
      <div className={`${className}-nav-footer`}>
        <a href="#home">Home</a>
        <a href="#Recipe">Recipe</a>
        <a href="#Favorites">Favorites</a>
        <a href="#MealPlanner">Meal Planner</a>
      </div> 
      
      <div className={`${className}-copyright`}>
        <p>&copy; 2024 IAT 276 Team 17 Sunset</p>
      </div>
    </footer>
  );
}

export default Footer;
