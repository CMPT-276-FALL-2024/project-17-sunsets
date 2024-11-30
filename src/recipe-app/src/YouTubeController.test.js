import {
    processYouTubeVideos,
    fetchSavedVideos,
    addVideoToSaved,
    deleteVideoFromSaved,
  } from './YouTubeController';
  import * as YouTubeModel from './YouTubeModel';
  
  jest.mock('./YouTubeModel', () => ({
    fetchYouTubeVideos: jest.fn(),
    getSavedVideos: jest.fn(),
    saveVideo: jest.fn(),
    removeVideo: jest.fn(),
  }));
  
  describe('YouTubeController Tests', () => {
    beforeEach(() => {
      jest.spyOn(console, 'error').mockImplementation(() => {}); // Suppress console.error
    });
  
    afterEach(() => {
      console.error.mockRestore(); // Restore console.error
      jest.clearAllMocks();
    });
  
    // Test for processYouTubeVideos function
    // Expect: Calls fetchYouTubeVideos and returns processed video data
    test('processYouTubeVideos fetches and processes video data', async () => {
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
  
    // Test for fetchSavedVideos function
    // Expect: Calls getSavedVideos and returns saved videos
    test('fetchSavedVideos returns saved videos', () => {
      const mockSavedVideos = [{ id: 'abc123', title: 'Saved Video' }];
      YouTubeModel.getSavedVideos.mockReturnValue(mockSavedVideos);
  
      const result = fetchSavedVideos();
      expect(result).toEqual(mockSavedVideos);
    });
  
    // Test for addVideoToSaved function
    // Expect: Calls saveVideo with the given video
    test('addVideoToSaved saves a video', () => {
      const video = { id: 'abc123', title: 'New Video' };
      addVideoToSaved(video);
      expect(YouTubeModel.saveVideo).toHaveBeenCalledWith(video);
    });
  
    // Test for deleteVideoFromSaved function
    // Expect: Calls removeVideo with the video ID
    test('deleteVideoFromSaved deletes a video by ID', () => {
      deleteVideoFromSaved('abc123');
      expect(YouTubeModel.removeVideo).toHaveBeenCalledWith('abc123');
    });
  });
  