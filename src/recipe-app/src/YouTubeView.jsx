import React from "react";

const YouTubeView = ({ videos, onPlay, onSave, onAddToPlaylist }) => {
  if (videos.length === 0) {
    return <p>No videos found. Try searching for something else!</p>;
  }

  return (
    <div className="youtube-view">
      {videos.map((video) => (
        <div key={video.id} className="video-item">
          <img
            src={video.thumbnail}
            alt={video.title}
            onClick={() => onPlay(video.id)}
            className="video-thumbnail"
          />
          <h4>{video.title}</h4>
          <button onClick={() => onSave(video.title, video.id)}>Save</button>
        </div>
      ))}
    </div>
  );
};

export default YouTubeView;
