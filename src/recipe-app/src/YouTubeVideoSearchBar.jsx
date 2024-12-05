import React, { useState } from "react";
import { processYouTubeVideos } from "./YouTubeController.jsx";

const YouTubeVideoSearchBar = ({ onSearchResults }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
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
    <div className="youtube-search-bar">
      <h2>Search your video</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search YouTube videos..."
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? "Loading..." : "Search"}
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default YouTubeVideoSearchBar;
