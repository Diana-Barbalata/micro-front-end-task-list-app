import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {federation} from '@module-federation/vite';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'taskListApp',
      filename: 'remoteEntry.js',
      exposes: {
        './TaskList': './src/index.tsx', // Expose the TaskListApp component
      },
      shared: ['react', 'react-dom'], // Share React and React DOM
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
  },
  server: {
    port: 3001,
    headers: {
      "Access-Control-Allow-Origin": "*", // Or specify your container's origin: "http://localhost:3000"
      "Access-Control-Allow-Methods": "GET,HEAD,PUT,POST,DELETE,PATCH",
      "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept",
    },
  },
});