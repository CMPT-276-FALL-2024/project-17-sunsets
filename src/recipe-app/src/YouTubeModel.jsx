const API_URL = "https://www.googleapis.com/youtube/v3/search";
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

import axios from "axios";


/**
 * The model.
 * Only 1 funtion:
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
