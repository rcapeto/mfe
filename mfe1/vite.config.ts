import federation from "@originjs/vite-plugin-federation";
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const port = 3001

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mfe1',
      filename: 'remoteEntry.js',
      shared: ['react', 'react-dom', 'react-router-dom'],
      exposes: {
        './Card': './src/components/Card/Card.tsx',
        './Routes': './src/routes/routes.tsx',
        './Router': './src/routes/router.tsx',
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
