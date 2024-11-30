Object.defineProperty(import.meta, 'env', {
    value: {
      VITE_SPOONACULAR_API_KEY: 'mock-spoonacular-api-key', // Mock Spoonacular API key
      VITE_YOUTUBE_API_KEY: 'mock-youtube-api-key',         // Mock YouTube API key
    },
    writable: true,
  });
  
  // Mock API URLs for Spoonacular and YouTube
  global.SPOONACULAR_API_URL = 'https://api.spoonacular.com/recipes';
  global.YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';
  