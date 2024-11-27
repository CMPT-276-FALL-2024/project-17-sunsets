// import React from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({className}) {
  return (
    <nav className={`${className}-navbar`}>
      <div className={`${className}-navdiv`}>
        {/* <span className={`${className}-menu-bar`}>
          <i className="fa-solid fa-bars"></i>
        </span> */}
        <div className = "home-logo">
          <a href="/" className = 'home-logo-a'>Sun<span>setz</span> </a>
        </div>
        <Link to="/" className="home-active">Home</Link>
        <Link to="/recipes" className = "recipe-active">Recipe</Link> {/* Corrected route path */}
        <Link to="/favorites" className = "favorite-active">Favorites</Link>
        <Link to="/tutorials" className = "tutorials-active">Tutorials</Link>
      </div>
    </nav>
  );
}

export default Navbar;
