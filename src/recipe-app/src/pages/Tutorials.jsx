// Tutorials.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx"; // Navbar for navigation
import Footer from "../components/Footer"; // Footer for consistency
import SearchBar from "../components/Recipe_SearchBar.jsx"; // Search bar component for recipes
import YouTubeVideoSearchBar from "../YouTubeVideoSearchBar.jsx"; // Search bar component for YouTube
import YouTubeView from "../YouTubeView.jsx"; // Video results component
import "../styles/Tutorials.css";
import "../styles/FavoritePage.css";
import "../styles/RecipePage.css";

const TutorialsAndFavorites = () => {
  const [videos, setVideos] = useState([]); // YouTube search results
  const [currentVideo, setCurrentVideo] = useState(""); // Currently playing video
  const [savedVideos, setSavedVideos] = useState([]); // Saved videos
  const [playlists, setPlaylists] = useState([]); // User-created playlists
  const [favoriteRecipes, setFavoriteRecipes] = useState([]); // Favorite recipes

  // Play a video
  const handlePlay = (videoId) => {
    setCurrentVideo(videoId);
  };

  // Save a video to the saved list
  const handleSave = (name, id) => {
    if (!savedVideos.find((video) => video.id === id)) {
      const newVideo = { name, id };
      setSavedVideos([...savedVideos, newVideo].sort((a, b) => a.name.localeCompare(b.name)));
    }
  };

  // Add a video to a specific playlist
  const handleAddToPlaylist = (playlistName, name, id) => {
    const updatedPlaylists = playlists.map((playlist) =>
      playlist.name === playlistName
        ? { ...playlist, videos: [...playlist.videos, { name, id }] }
        : playlist
    );
    setPlaylists(updatedPlaylists);
  };

  // Remove a recipe from favorites
  const handleRemoveFavorite = (recipe) => {
    setFavoriteRecipes(favoriteRecipes.filter((fav) => fav.id !== recipe.id));
  };

  return (
    <div className="page-container">
      <Navbar className="tutorials" />

      {/* Use this search bar instead */}
      <SearchBar className="recipe"/>

      {/* YouTube Search Section  */}
      <YouTubeVideoSearchBar onSearchResults={setVideos} />

      <div className="content">
        {/* Recipe Favorites Section */}
        <div className="favorite-recipes-section">
          <h2>Your Favorite Recipes</h2>
          {favoriteRecipes.length > 0 ? (
            <div className="favorite-recipes-grid">
              {favoriteRecipes.map((recipe) => (
                <div key={recipe.id} className="favorite-recipe-item">
                  <img src={recipe.image} alt={recipe.title} />
                  <div className="recipe-info">
                    <h3>{recipe.title}</h3>
                    <button
                      onClick={() => handleRemoveFavorite(recipe)}
                      className="remove-favorite-btn"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No favorite recipes added yet.</p>
          )}
        </div>

        {/* YouTube Video Section */}
        <div className="youtube-section">
          <h2>YouTube Tutorials</h2>

          {/* Video Player */}
          <div className="video-player">
            {currentVideo ? (
              <iframe
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${currentVideo}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <p>Select a video to play</p>
            )}
          </div>

          {/* Video Results */}
          <YouTubeView
            videos={videos}
            onPlay={handlePlay}
            onSave={handleSave}
            onAddToPlaylist={handleAddToPlaylist}
          />

          {/* Saved Videos */}
          <div className="saved-videos">
            <h3>Saved Videos</h3>
            <ul>
              {savedVideos.map((video) => (
                <li key={video.id}>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {video.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer className="home" />
    </div>
  );
};

export default TutorialsAndFavorites;
