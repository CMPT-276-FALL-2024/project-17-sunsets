// components/SearchBar.jsx
import React from 'react';

function SearchBar() {
  return (
    <form className="search-container">
      <input type="text" className="input" placeholder="Search" />
      <i className="fa-solid fa-magnifying-glass magnifier"></i>
    </form>
  );
}

export default SearchBar;
