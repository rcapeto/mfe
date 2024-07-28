import federation from "@originjs/vite-plugin-federation";
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const port = 3002

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'miniShellReact',
      filename: 'remoteEntry.js',
      shared: ['react', 'react-dom'],
      remotes: {
        mfe1: 'http://localhost:3001/assets/remoteEntry.js',
        mfe2: 'http://localhost:5001/remoteEntry.js'
      },
      exposes: {
        './Card': './src/components/Card.tsx'
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
