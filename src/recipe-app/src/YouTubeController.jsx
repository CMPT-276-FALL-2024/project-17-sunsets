import { fetchYouTubeVideos, getSavedVideos, saveVideo, removeVideo } from "./YouTubeModel.jsx";

/**
 * The controller.
 * 1 job:
 * Processes YouTube video data for rendering in the view.
 * @param {string} query - The search term to fetch videos for.
 * @returns {Promise<Object[]>} - A list of processed video objects.
 * @throws Will throw an error if the fetch or processing fails.
 * Called by view.
 * Calls Model.
 */
export const processYouTubeVideos = async (query) => {
  try {
    // Fetch raw video data from the model
    const videos = await fetchYouTubeVideos(query);

    // Map raw data to a simplified format
    return videos.map((video) => ({
      id: video.id.videoId,
      title: video.snippet.title,
      thumbnail: video.snippet.thumbnails.default.url,
    }));
  } catch (error) {
    console.error("Error processing YouTube videos:", error.message);
    throw new Error("Failed to process videos. Please try again.");
  }
};

/**
 * Fetches saved videos for the view.
 * @returns {Array} List of saved videos.
 */
export const fetchSavedVideos = () => {
  return getSavedVideos();
};

/**
 * Adds a video to the saved list.
 * @param {Object} video - The video object to save.
 */
export const addVideoToSaved = (video) => {
  saveVideo(video);
};

/**
 * Removes a video from the saved list.
 * @param {string} videoId - The ID of the video to remove.
 */
export const deleteVideoFromSaved = (videoId) => {
  removeVideo(videoId);
};
