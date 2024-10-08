import federation from "@originjs/vite-plugin-federation";
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const port = 3000

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shellReact',
      filename: 'remoteEntry.js',
      shared: ['react', 'react-dom', 'react-router-dom'],
      remotes: {
        mfe1: 'http://localhost:3001/assets/remoteEntry.js',
        mfe2: 'http://localhost:5001/remoteEntry.js',
        miniShellReact: 'http://localhost:3002/assets/remoteEntry.js',
        miniShellAngular: 'http://localhost:5002/remoteEntry.js',
      },
    }),
  ],
  preview: {
    port,
  },
  server: {
    port,
  },
  build: {
    target: "esnext",
    cssCodeSplit: false,
  },
})
