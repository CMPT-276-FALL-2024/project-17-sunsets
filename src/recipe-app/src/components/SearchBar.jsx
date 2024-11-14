// SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch}) => {
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

  return (
    <form onSubmit={handleSearch} className='home-search-container'>
      <span className='home-magnifier' onClick={handleSearch} style={{ cursor: 'pointer' }}>
        <i className="fa-solid fa-magnifying-glass magnifier"> </i>
      </span>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search"
        className='home-input'
      />
      <button type="submit" style={{ display: 'none' }} />
    </form>
  );
};

export default SearchBar;
