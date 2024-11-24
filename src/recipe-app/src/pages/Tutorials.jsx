import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Navbar for navigation
import Footer from "../components/Footer"; // Footer for consistency
import YouTubeVideoSearchBar from "../YouTubeVideoSearchBar.jsx"; // Search bar component
import YouTubeView from "../YouTubeView.jsx"; // Video results component
import '../styles/Tutorials.css';
import { fetchSavedVideos,addVideoToSaved,deleteVideoFromSaved} from "../YouTubeController.jsx"

const Tutorials = () => {
  const [videos, setVideos] = useState([]); // Search results
  const [currentVideo, setCurrentVideo] = useState(""); // Currently playing video
  const [savedVideos, setSavedVideos] = useState([]); // Saved videos

  // Load saved videos from the controller when the component mounts
  useEffect(() => {
    setSavedVideos(fetchSavedVideos());
  }, []);

  // Play a video
  const handlePlay = (videoId) => {
    setCurrentVideo(videoId);
  };

  
  // Save a video
  const handleSave = (name, id) => {
    const newVideo = { name, id };
    addVideoToSaved(newVideo); // Delegate to controller
    setSavedVideos(fetchSavedVideos()); // Refresh state
  };

  // Remove a video
  const handleRemove = (videoId) => {
    deleteVideoFromSaved(videoId); // Delegate to controller
    setSavedVideos(fetchSavedVideos()); // Refresh state
  };

  return (
    <div className="tutorials">
      <Navbar />

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

      <Footer />
    </div>
  );
};

export default Tutorials;
