import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/mb-portfolio/', // Set the base path to match your GitHub Pages repository name
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for build
    assetsDir: '.', // Relative path to assets (make sure it's correct for deployment)
    sourcemap: false, // You can enable sourcemaps if needed
  },
});
