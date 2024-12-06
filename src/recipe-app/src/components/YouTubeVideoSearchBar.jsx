import React, { useState } from "react";
import { processYouTubeVideos } from "../YouTubeController.jsx";

const YouTubeVideoSearchBar = ({ className, onSearchResults }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent form submission
    if (!query.trim()) return; // Prevent empty searches
  
    setLoading(true);
    setError(null);
  
    try {
      const videos = await processYouTubeVideos(query); // Call the controller
      onSearchResults(videos); // Pass results to the parent
    } catch (err) {
      setError("Failed to fetch videos. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className={`${className}-search`}>
      <form className={`${className}-search-container`} onSubmit={handleSearch}>
        <input
          type="text"
          className={`${className}-input`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search YouTube videos..."
        />
        <button type="submit" className={`${className}-magnifier`}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default YouTubeVideoSearchBar;
