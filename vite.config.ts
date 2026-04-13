import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, '.', '');
  const projectRoot = new URL('.', import.meta.url).pathname;

  return {
    base: command === 'serve' ? '/' : env.BASE_URL || './',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': projectRoot,
      },
    },
    server: {
      hmr: env.DISABLE_HMR !== 'true',
    },
  };
});
