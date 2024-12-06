import React from "react";

const YouTubeView = ({ videos, onPlay, onSave }) => {
  if (videos.length === 0) {
    return <p>No videos found. Please search again!</p>;
  }

  return (
    <div className="youtube-view">
      {videos.map((video) => (
        <div key={video.id} className="video-item">
          {/* Video Thumbnail */}
          <img
            src={video.thumbnail}
            alt={video.title}
            className="video-thumbnail"
          />
          <h4>{video.title}</h4>

          {/* Play Button */}
          <button 
            className="video-play-button" 
            onClick={() => onPlay(video.id)}
          >
            Play
          </button>

          {/* Save Button */}
          <button 
            className="video-save-button" 
            onClick={() => onSave(video.title, video.id)}
          >
            Save
          </button>
        </div>
      ))}
    </div>
  );
};

export default YouTubeView;
