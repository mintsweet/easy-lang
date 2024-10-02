import path from 'path';
import fs from 'fs';

import { ipcMain, dialog } from 'electron';

import { txtConverter } from './converter/txt';
import { IPC } from './types';

export const converter: Record<string, (filePath: string) => void> = {
  '.txt': txtConverter,
};

export const registerIpc = () => {
  ipcMain.handle(IPC.OPEN_FILE_DIALOG, async () => {
    const res = await dialog
      .showOpenDialog({
        properties: ['openFile'],
        filters: [{ name: 'All Files', extensions: ['txt'] }],
      })
      .then(({ canceled, filePaths }) => {
        if (canceled) {
          return null;
        } else {
          return filePaths[0];
        }
      });
    return res;
  });

  ipcMain.handle(IPC.TRASNLATE_CONTENT, async (_, filePath: string) => {
    const suffix = path.extname(filePath);
    const content = await converter[suffix](filePath);

    // TODO: call chatgpt api to translate content

    return content;
  });

  ipcMain.handle(IPC.DOWNLOAD_FILE, async (_, content: string) => {
    const { filePath } = await dialog.showSaveDialog({
      title: 'Save Translated File',
      filters: [{ name: 'All Files', extensions: ['txt'] }],
    });

    if (filePath) {
      fs.writeFileSync(filePath, content);
      return filePath;
    }
    return null;
  });
};
