import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ghPages } from 'vite-plugin-gh-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/ArcIT/',  // 👈 Replace <repo-name> with your GitHub repo name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
