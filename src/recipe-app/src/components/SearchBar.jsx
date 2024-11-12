// SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch, page }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (onSearch) {
      onSearch(query); // Trigger the search with the input value
    }
  };

  const containerClass = page === 'home' ? 'home-search-container' : 'recipe-search-container';
  const inputClass = page === 'home' ? 'home-input' : 'recipe-input';
  const magnifierClass = page === 'home' ? 'home-magnifier' : 'recipe-magnifier';

  return (
    <form onSubmit={handleSearch} className={containerClass}>
      <span className={magnifierClass} onClick={handleSearch} style={{ cursor: 'pointer' }}>
        <i className="fa-solid fa-magnifying-glass magnifier"> </i>
      </span>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search"
        className={inputClass}
      />
      <button type="submit" style={{ display: 'none' }} />
    </form>
  );
};

export default SearchBar;
