// components/Footer.jsx
import React from 'react';


function Footer({className}) {
  return (
    <footer className={`${className}-footer`}>
      <div className={`${className}-social`}>
        <a href="https://github.com/ChaitanyaMittal27" className={`${className}-github`}><i className="fa-brands fa-github"></i></a>
        <a href="https://github.com/anursaidy" className={`${className}-github`}><i className="fa-brands fa-github"></i></a>
        <a href="https://github.com/sdoan17/PortfolioProjects" className={`${className}-github`}><i className="fa-brands fa-github"></i></a>
        <a href="https://github.com/Yizhang-cmd" className={`${className}-github`}><i className="fa-brands fa-github"></i></a>
      </div>
      
      <div className={`${className}-nav-footer`}>
        <a href="/">Home</a>
        <a href="/recipes">Recipe</a>
        <a href="/favorites">Favorites</a>
        <a href="/tutorials">Tutorials</a>

      </div> 
      
      <div className={`${className}-copyright`}>
        <p>&copy; 2024 CMPT 276 Team 17 Sunset</p>
      </div>
    </footer>
  );
}

export default Footer;
