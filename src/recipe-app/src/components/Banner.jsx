// components/Banner.jsx
import React from 'react';
import SearchBar from './SearchBar';
import bannerImage from '../assets/images/banner.jpg';

function Banner() {
  return (
    <section className="banner">
      <img src={bannerImage} alt="banner" />
      <div className="welcome">
        <div className="meal-search">
          <h2 className="title">Welcome to a world of flavor</h2>
          <p>Discover delicious recipes, nutrition insights, and culinary inspiration to fuel your passion for cooking</p>
        </div>
        <SearchBar />
      </div>
    </section>
  );
}

export default Banner;
