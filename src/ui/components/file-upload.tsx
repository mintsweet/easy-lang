import { useState } from 'react';
import { useLocalStorage, useSimulateProgress } from '@mints/hooks';

import { IPC } from '@ipc/types';

interface Props {
  from: string;
  to: string;
}

export const FileUpload = ({ from, to }: Props) => {
  const [content, setContent] = useState<string | null>(null);

  const [translator] = useLocalStorage<ITranslator | null>('translator', null);

  const [progress, onStart, onReset] = useSimulateProgress(
    3000,
    async (filePath) => {
      const content = await window.electron.ipcRenderer.invoke(
        IPC.TRASNLATE_CONTENT,
        filePath,
        {
          from,
          to,
          ...translator.config,
        },
      );
      setContent(content);
    },
  );

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

  const handleReset = () => {
    setContent(null);
    onReset();
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
      {progress === 100 && (
        <div className="flex flex-col items-center">
          <h2 className="mb-4 text-xl font-semibold">Translation completed!</h2>
          <div className="flex">
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              onClick={handleDownloadFile}
            >
              Download
            </button>
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              onClick={handleReset}
            >
              Finish
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
