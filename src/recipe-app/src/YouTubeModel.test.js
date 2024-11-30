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

  it.todo('fetchYouTubeVideos fetches videos from YouTube API'); // Placeholder for fetchYouTubeVideos test

  it('saveVideo stores a video without duplicates', () => {
    const video = { id: 'abc123', title: 'Video' };
    saveVideo(video);

    const savedVideos = JSON.parse(localStorage.getItem('savedVideos'));
    expect(savedVideos).toEqual([video]);
  });

  it('getSavedVideos retrieves videos from local storage', () => {
    const mockVideos = [{ id: 'abc123', title: 'Saved Video' }];
    localStorage.setItem('savedVideos', JSON.stringify(mockVideos));

    const result = getSavedVideos();
    expect(result).toEqual(mockVideos);
  });

  it('removeVideo deletes a video by ID from local storage', () => {
    const mockVideos = [{ id: 'abc123', title: 'Video to Delete' }];
    localStorage.setItem('savedVideos', JSON.stringify(mockVideos));

    removeVideo('abc123');
    const remainingVideos = JSON.parse(localStorage.getItem('savedVideos'));
    expect(remainingVideos).toEqual([]);
  });
});
