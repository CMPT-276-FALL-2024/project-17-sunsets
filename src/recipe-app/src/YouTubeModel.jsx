const API_URL = "https://www.googleapis.com/youtube/v3/search";
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

import axios from "axios";


/**
 * The model.
 * Fetches videos from the YouTube Data API based on the search query.
 * Called by controller.
 */
export const fetchYouTubeVideos = async (query) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: query,
        part: "snippet",
        maxResults: 10,
        type: "video",
        key: API_KEY,
      },
    });
    return response.data.items; // Return the array of video objects
  } catch (error) {
    console.error("Error fetching videos from YouTube API:", error.message);
    throw new Error("Failed to fetch videos. Please try again.");
  }
};

/**
 * Retrieves saved videos from local storage.
 * @returns {Array} List of saved videos or an empty array if none exist.
 */
export const getSavedVideos = () => {
  const savedVideos = localStorage.getItem("savedVideos");
  return savedVideos ? JSON.parse(savedVideos) : []; // Always return an array
};


/**
 * Saves a video to local storage.
 * @param {Object} video - The video object to save (name and id).
 */
export const saveVideo = (video) => {
  const savedVideos = getSavedVideos();
  if (!savedVideos.find((v) => v.id === video.id)) {
    savedVideos.push(video);
    localStorage.setItem("savedVideos", JSON.stringify(savedVideos));
  }
};

/**
 * Removes a video from local storage.
 * @param {string} videoId - The ID of the video to remove.
 */
export const removeVideo = (videoId) => {
  const savedVideos = getSavedVideos();
  const updatedVideos = savedVideos.filter((v) => v.id !== videoId);
  localStorage.setItem("savedVideos", JSON.stringify(updatedVideos));
};