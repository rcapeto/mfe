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
      shared: ['react', 'react-dom'],
      remotes: {
        app: 'http://localhost:3001/assets/remoteEntry.js'
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
