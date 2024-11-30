import {
    processYouTubeVideos,
    fetchSavedVideos,
    addVideoToSaved,
    deleteVideoFromSaved,
  } from './YouTubeController';
  import * as YouTubeModel from './YouTubeModel';
  import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
  
  vi.mock('./YouTubeModel', () => ({
    fetchYouTubeVideos: vi.fn(),
    getSavedVideos: vi.fn(),
    saveVideo: vi.fn(),
    removeVideo: vi.fn(),
  }));
  
  describe('YouTubeController Tests', () => {
    beforeEach(() => {
      vi.spyOn(console, 'error').mockImplementation(() => {}); // Suppress console.error
    });
  
    afterEach(() => {
      console.error.mockRestore(); // Restore console.error
      vi.clearAllMocks();
    });
  
    it('processYouTubeVideos fetches and processes video data', async () => {
      const mockData = [
        {
          id: { videoId: 'abc123' },
          snippet: {
            title: 'Mock Video',
            thumbnails: { default: { url: 'mock-thumbnail.jpg' } },
          },
        },
      ];
      YouTubeModel.fetchYouTubeVideos.mockResolvedValue(mockData);
  
      const result = await processYouTubeVideos('pasta');
      expect(result).toEqual([
        { id: 'abc123', title: 'Mock Video', thumbnail: 'mock-thumbnail.jpg' },
      ]);
      expect(YouTubeModel.fetchYouTubeVideos).toHaveBeenCalledWith('pasta');
    });
  
    it('fetchSavedVideos returns saved videos', () => {
      const mockSavedVideos = [{ id: 'abc123', title: 'Saved Video' }];
      YouTubeModel.getSavedVideos.mockReturnValue(mockSavedVideos);
  
      const result = fetchSavedVideos();
      expect(result).toEqual(mockSavedVideos);
    });
  
    it('addVideoToSaved saves a video', () => {
      const video = { id: 'abc123', title: 'New Video' };
      addVideoToSaved(video);
      expect(YouTubeModel.saveVideo).toHaveBeenCalledWith(video);
    });
  
    it('deleteVideoFromSaved deletes a video by ID', () => {
      deleteVideoFromSaved('abc123');
      expect(YouTubeModel.removeVideo).toHaveBeenCalledWith('abc123');
    });
  });
  