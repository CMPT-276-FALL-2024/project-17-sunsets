import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import axios from 'axios';
import { fetchYouTubeVideos, saveVideo, getSavedVideos, removeVideo } from './YouTubeModel';

vi.mock('axios');

describe('YouTubeModel Tests', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.spyOn(console, 'error').mockImplementation(() => {}); // Suppress console.error
  });

  afterEach(() => {
    console.error.mockRestore(); // Restore console.error
    vi.clearAllMocks();
  });

  // Test for fetchYouTubeVideos API call
  it('fetchYouTubeVideos fetches videos from YouTube API', async () => {
    const mockResponse = {
      data: {
        items: [{ id: { videoId: 'abc123' }, snippet: { title: 'Mock Video' } }],
      },
    };
    axios.get.mockResolvedValue(mockResponse);

    const result = await fetchYouTubeVideos('pasta');
    expect(result).toEqual(mockResponse.data.items);
    expect(axios.get).toHaveBeenCalledWith(
      `${import.meta.env.VITE_API_URL}/search`,
      expect.objectContaining({
        params: { q: 'pasta', key: import.meta.env.VITE_API_KEY, part: 'snippet' },
      })
    );
  });

  // Test for saveVideo
  it('saveVideo stores a video without duplicates', () => {
    const video = { id: 'abc123', title: 'Video' };
    saveVideo(video);

    const savedVideos = JSON.parse(localStorage.getItem('savedVideos'));
    expect(savedVideos).toEqual([video]);
  });

  // Test for getSavedVideos
  it('getSavedVideos retrieves videos from local storage', () => {
    const mockVideos = [{ id: 'abc123', title: 'Saved Video' }];
    localStorage.setItem('savedVideos', JSON.stringify(mockVideos));

    const result = getSavedVideos();
    expect(result).toEqual(mockVideos);
  });

  // Test for removeVideo
  it('removeVideo deletes a video by ID from local storage', () => {
    const mockVideos = [{ id: 'abc123', title: 'Video to Delete' }];
    localStorage.setItem('savedVideos', JSON.stringify(mockVideos));

    removeVideo('abc123');
    const remainingVideos = JSON.parse(localStorage.getItem('savedVideos'));
    expect(remainingVideos).toEqual([]);
  });
});
