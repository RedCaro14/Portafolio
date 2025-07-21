import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Opcional: Si persisten errores de módulos ESM
      external: ['framer-motion'],
    },
  },
});