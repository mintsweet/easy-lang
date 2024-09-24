import { defineConfig } from 'vite';

// "electron-forge start" will watch for changes to the main process and restart it
// https://github.com/electron/forge/issues/682#issuecomment-1793552649
export default defineConfig({
  resolve: {
    mainFields: ['module', 'jsnext:main', 'jsnext'],
  },
  plugins: [
    {
      name: 'restart',
      closeBundle() {
        process.stdin.emit('data', 'rs');
      },
    },
  ],
});
