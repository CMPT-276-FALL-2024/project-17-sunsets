/**
 * Tutorials Page Component
 * 
 * This component provides functionality to search, play, save, and remove YouTube videos,
 * as well as a placeholder for recipe search. It uses `YouTubeVideoSearchBar` for YouTube
 * searches, `YouTubeView` for displaying search results, and local storage to manage saved videos.
 * The page includes navigation (`Navbar`), a footer (`Footer`), and search functionalities for 
 * both recipes and YouTube videos.
 */

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 
import YouTubeVideoSearchBar from "../YouTubeVideoSearchBar.jsx"; 
import YouTubeView from "../YouTubeView.jsx";
import SearchBar from "../components/Recipe_SearchBar.jsx";
import {fetchSavedVideos,addVideoToSaved,deleteVideoFromSaved} from "../YouTubeController.jsx"
import '../styles/Tutorials.css';
import "../styles/RecipePage.css";
import "../styles/HomePage.css";
import "../styles/FavoritePage.css";

const Tutorials = () => {
  const [videos, setVideos] = useState([]); // Search results
  const [currentVideo, setCurrentVideo] = useState(""); // Currently playing video
  const [savedVideos, setSavedVideos] = useState([]); // Saved videos

   /**
   * Effect to load saved videos when the component mounts.
   * Uses the `fetchSavedVideos` function from `YouTubeController` to get data from local storage.
   */
  useEffect(() => {
    try {
      setSavedVideos(fetchSavedVideos()); // Fetch saved videos on mount
    } catch (error) {
      console.error("Error fetching saved videos:", error); // Log errors if local storage fails
      setSavedVideos([]); // Fallback to an empty array
    }
  }, []);

  /**
   * Handles playing a video.
   * @param {string} videoId - The ID of the YouTube video to play.
   */
  const handlePlay = (videoId) => {
    setCurrentVideo(videoId);
  };

  
  // Save a video
  const handleSave = (name, id) => {
    const newVideo = { name, id };
    addVideoToSaved(newVideo); // Delegate to controller
    setSavedVideos(fetchSavedVideos()); // Refresh state
  };

  /**
   * Handles saving a video.
   * Adds the video to local storage and updates the `savedVideos` state.
   * @param {string} name - The name of the video.
   * @param {string} id - The ID of the video.
   */
  const handleRemove = (videoId) => {
    deleteVideoFromSaved(videoId); // Delegate to controller
    setSavedVideos(fetchSavedVideos()); // Refresh state
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
        />

        {/* Saved Videos Section */}
        {/* List of elements with 'remobe' button on right*/}
        <div className="saved-videos-section">
          <h3>Saved Videos</h3>
          {savedVideos.length > 0 ? (
            <ul className="saved-videos-list">
              {savedVideos.map((video) => (
                <li key={video.id} className="saved-video-item">
                  <span className="saved-video-title">
                    <a
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {video.name}
                    </a>
                  </span>
                  <button
                    className="remove-video-button"
                    onClick={() => handleRemove(video.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No saved videos yet.</p>
          )}
        </div>
      </div>

      <Footer className="home" />
    </div>
  );
};

export default Tutorials;
