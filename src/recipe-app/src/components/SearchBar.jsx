// SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch, page }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  const containerClass = page === 'home' ? 'home-search-container' : 'recipe-search-container';
  const inputClass = page === 'home' ? 'home-input' : 'recipe-input';
  const magnifierClass = page === 'home' ? 'home-magnifier' : 'recipe-magnifier';

  return (
    <div className={containerClass}>
      <span className={magnifierClass}>
        <i className="fa-solid fa-magnifying-glass magnifier"> </i>
      </span>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        className={inputClass}
      />
      <button onClick={handleSearch} style={{ display: 'none' }} />
    </div>
  );
};

export default SearchBar;
