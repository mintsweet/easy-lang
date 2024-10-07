import fs from 'fs/promises';

export const txtConverter = (filePath: string): Promise<string> => {
  return fs.readFile(filePath, 'utf8');
};
