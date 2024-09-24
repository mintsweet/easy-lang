import { contextBridge, ipcRenderer } from 'electron';

import { IPC } from './ipc/types';

export const electron = {
  versions: () => ({
    node: process.versions.node,
    chrome: process.versions.chrome,
    electron: process.versions.electron,
  }),
  ipcRenderer: {
    invoke: (type: IPC, ...args: any[]) => ipcRenderer.invoke(type, ...args),
  },
};

contextBridge.exposeInMainWorld('electron', electron);
