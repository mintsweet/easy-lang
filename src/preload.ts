const { contextBridge } = require('electron');

export const electron = {
  versions: () => ({
    node: process.versions.node,
    chrome: process.versions.chrome,
    electron: process.versions.electron,
  }),
};

contextBridge.exposeInMainWorld('electron', electron);
