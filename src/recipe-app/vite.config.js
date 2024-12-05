/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/project-17-sunsets/',
  test: {
    globals: true, // Enable Jest-like global functions (describe, it, expect)
    environment: 'jsdom', // Use jsdom to simulate a browser environment
    setupFiles: 'src/setupTests.js', // Optional: Setup file for mocks or initial configurations
    coverage: {
      reporter: ['text', 'json', 'html'], // Enable coverage reports
      exclude: ['node_modules', 'dist'], // Exclude these from coverage
    },
  },
});
