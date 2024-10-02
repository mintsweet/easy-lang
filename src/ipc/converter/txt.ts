import fs from 'fs/promises';

export const txtConverter = (filePath: string) => {
  return fs.readFile(filePath, 'utf8');
};
