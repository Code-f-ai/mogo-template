import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
       '@styles': path.resolve(__dirname, 'src/styles'),
       '@fontawesome': path.resolve(__dirname, 'src/styles/vendors/fontawesome'),
        '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@images': path.resolve(__dirname, 'src/assets/images'),
        '@scripts': path.resolve(__dirname, 'src/scripts'),
    },
  },
});