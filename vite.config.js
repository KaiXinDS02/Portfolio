import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Use the Vercel env flag to serve assets from root there; keep GitHub Pages prefix otherwise
  base: process.env.VERCEL ? '/' : '/Portfolio/',
  plugins: [react()],
});