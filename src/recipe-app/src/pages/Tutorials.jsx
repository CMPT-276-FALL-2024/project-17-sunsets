import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Navbar for navigation
import Footer from "../components/Footer"; // Footer for consistency
import YouTubeVideoSearchBar from "../YouTubeVideoSearchBar.jsx"; // Search bar component
import YouTubeView from "../YouTubeView.jsx"; // Video results component
import SearchBar from "../components/Recipe_SearchBar.jsx";
import '../styles/Tutorials.css';
import "../styles/RecipePage.css";
import "../styles/HomePage.css";
import "../styles/FavoritePage.css";

const Tutorials = () => {
  const [videos, setVideos] = useState([]); // Search results
  const [currentVideo, setCurrentVideo] = useState(""); // Currently playing video
  const [savedVideos, setSavedVideos] = useState([]); // Saved videos
  const [playlists, setPlaylists] = useState([]); // User-created playlists

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

  return (
    <div className="page-container">
      <Navbar className="tutorials"/>
      <SearchBar className="recipe" /> 

      {/* Search Bar */}
      <YouTubeVideoSearchBar onSearchResults={setVideos} />

      {/* Main Content */}
      <div className="main-content">
        {/* Video Player Section */}
        <div className="video-player-section">
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

        {/* Video Search Results */}
        <YouTubeView
          videos={videos}
          onPlay={handlePlay}
          onSave={handleSave}
          onAddToPlaylist={handleAddToPlaylist}
        />

        {/* Saved Videos Section */}
        <div className="saved-videos-section">
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

      <Footer className="home" />
    </div>
  );
};

export default Tutorials;
