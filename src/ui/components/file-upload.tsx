import { useState } from 'react';
import { useSimulateProgress } from '@mints/hooks';

import { IPC } from '@ipc/types';

export const FileUpload = () => {
  const [content, setContent] = useState<string | null>(null);

  const [progress, onStart] = useSimulateProgress(3000, async (filePath) => {
    const content = await window.electron.ipcRenderer.invoke(
      IPC.TRASNLATE_CONTENT,
      filePath,
    );
    setContent(content);
  });

  const handleOpendFile = async () => {
    const filePath = await window.electron.ipcRenderer.invoke(
      IPC.OPEN_FILE_DIALOG,
    );

    if (filePath) {
      // Mock a simulate progress Local Parse
      onStart(filePath);
    }
  };

  const handleDownloadFile = async () => {
    await window.electron.ipcRenderer.invoke(IPC.DOWNLOAD_FILE, content);
  };

  return (
    <div className="flex items-center justify-center w-full">
      {progress === 0 && (
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
          onClick={handleOpendFile}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-50">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 ">TXT</p>
          </div>
        </label>
      )}
      {progress > 0 && progress < 100 && (
        <div className="mt-4 w-full">
          <span>File Parsing...</span>
          <span className="relative block h-2 bg-gray-300 rounded-lg">
            <span
              className="absolute top-0 h-2 bg-blue-500 rounded-lg"
              style={{ width: `${progress}%` }}
            />
          </span>
        </div>
      )}
      {progress === 100 && <div onClick={handleDownloadFile}>Download!</div>}
    </div>
  );
};
