import { electron } from '../preload';

declare global {
  interface Window {
    electron: typeof electron;
  }
}
