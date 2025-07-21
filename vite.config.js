import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['framer-motion'], // Fuerza la inclusión en el pre-bundling
    exclude: [], // Limpia exclusiones innecesarias
  },
  build: {
    rollupOptions: {
      external: [], // Elimina la externalización de framer-motion
      output: {
        manualChunks: {
          // Separa framer-motion en su propio chunk (opcional para optimización)
          'framer-motion': ['framer-motion'],
        },
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true, // Crucial para módulos híbridos
    },
  },
});