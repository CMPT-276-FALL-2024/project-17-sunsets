// components/Banner.jsx
import React from 'react';
import SearchBar from './SearchBar';
import bannerImage from '../assets/images/banner.jpg';

function Banner({ className, onSearch }) {
  return (
    <section className={`${className}-banner`}>
      <img src={bannerImage} alt="banner" />
      <div className={`${className}-welcome`}>
        <div className={`${className}-meal-search`}>
          <h2 className={`${className}-title`}>Welcome to a world of flavor</h2>
          <p>Discover delicious recipes, nutrition insights, and <br />culinary inspiration to fuel your passion for cooking</p>
        </div>
        <SearchBar onSearch={onSearch} page={className} />
      </div>
    </section>
  );
}

export default Banner;
