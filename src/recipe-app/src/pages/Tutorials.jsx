import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import YouTubeVideoSearchBar from "../components/YouTubeVideoSearchBar.jsx";
import YouTubeView from "../YouTubeView.jsx";
import { fetchSavedVideos, addVideoToSaved, deleteVideoFromSaved } from "../YouTubeController.jsx";
import "../styles/Tutorials.css";

const Tutorials = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState("");
  const [savedVideos, setSavedVideos] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); // Track if a search has been performed

  useEffect(() => {
    try {
      const loadedSavedVideos = fetchSavedVideos();
      setSavedVideos(fetchSavedVideos());
      if (loadedSavedVideos.length > 0) {
        setHasSearched(true);
      }
    } catch (error) {
      console.error("Error fetching saved videos:", error);
      setSavedVideos([]);
    }
  }, []);

  // Play a video
  const handlePlay = (videoId) => {
    setCurrentVideo(videoId);
  };

  // Save
  const handleSave = (name, id) => {
    const newVideo = { name, id };
    const updatedVideos = fetchSavedVideos();
    addVideoToSaved(newVideo);
    setSavedVideos(fetchSavedVideos());
    setHasSearched(true);
  };

  //Remove
  const handleRemove = (videoId) => {
    deleteVideoFromSaved(videoId);
    const updatedVideos = fetchSavedVideos();
    setSavedVideos(updatedVideos); // Refresh saved videos state
    // Hide content if no saved videos and no search results
    if (updatedVideos.length === 0 && videos.length === 0) {
      setHasSearched(false);
    }
  };


  const handleSearch = (results) => {
    setVideos(results);
    setHasSearched(true); // Mark that a search has been performed
  };

  return (
    <div className="page-container">
      <Navbar className="tutorials" />
      <YouTubeVideoSearchBar onSearchResults={handleSearch} className="youtube" />

      {hasSearched && (
        <div className="main-content">
          {currentVideo && (
            <div className="video-player-section">
              <iframe
                width="100%"
                height="100"
                src={`https://www.youtube.com/embed/${currentVideo}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {/* Video Search Results */}
          <YouTubeView
            videos={videos}
            onPlay={handlePlay}
            onSave={handleSave}
            hasSearched={hasSearched}
          />

          {/* Saved Videos Section */}
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
      )}

      <Footer className="home" />
    </div>
  );
};

export default Tutorials;
