// components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="footer" id="social">
      <div className="social">
        <a href="#" className="github"><i className="fa-brands fa-github"></i></a>
        <a href="#" className="github"><i className="fa-brands fa-github"></i></a>
        <a href="#" className="github"><i className="fa-brands fa-github"></i></a>
        <a href="#" className="github"><i className="fa-brands fa-github"></i></a>
      </div>
      
      <div className="nav-footer">
        <a href="#home" className="active">Home</a>
        <a href="#Recipe">Recipe</a>
        <a href="#Favorites">Favorites</a>
        <a href="#MealPlanner">Meal Planner</a>
      </div> 
      
      <div className="copyright">
        <p>&copy; 2024 IAT 276 Team 17 Sunset</p>
      </div>
    </footer>
  );
}

export default Footer;
