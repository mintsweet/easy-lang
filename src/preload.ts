const { contextBridge } = require('electron');

export const api = {
  versions: () => ({
    node: process.versions.node,
    chrome: process.versions.chrome,
    electron: process.versions.electron,
  }),
};

contextBridge.exposeInMainWorld('api', api);
