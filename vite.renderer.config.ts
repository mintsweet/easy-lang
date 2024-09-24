import path from 'path';

import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.join(__dirname, './src/ui'),
      '@ipc': path.join(__dirname, './src/ipc'),
    },
  },
});
