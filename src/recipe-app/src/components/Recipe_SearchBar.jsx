import React, { useState } from 'react';

function SearchBar({ className, onSearch }) {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(query); // Trigger the search with the input value
        }
    };

    return (
        <div className={`${className}-search`}>
            <form className={`${className}-search-container`} onSubmit={handleSearch}>
                <input
                    type="text"
                    className={`${className}-input`}
                    placeholder="Search"
                    value={query}
                    onChange={handleInputChange}
                />
                <button type="submit" className={`${className}-magnifier`}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </div>
    );
}

export default SearchBar;
