import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enable global test API like `expect` and `it`
    environment: 'jsdom', // Use jsdom for testing React components
    setupFiles: './src/test/Counter.test.jsx', // Optional: Setup file for custom configurations like jest-dom
  },
});
