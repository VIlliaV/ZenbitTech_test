import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': new URL('src', import.meta.url).pathname,
    },
  },
});