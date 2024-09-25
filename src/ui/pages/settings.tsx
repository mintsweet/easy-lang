import { useNavigate } from 'react-router-dom';

import { SelectTranslator } from '@/components';
import { useTranslator } from '@/context';

export const Settings = () => {
  const navigate = useNavigate();
  const [translator, setTranslator] = useTranslator();

  return (
    <div className="flex flex-col">
      <div className="flex justify-end">
        <svg
          className="w-4 h-4 text-gray-500 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 12 12"
          onClick={() => navigate('/')}
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M2 2l10 10"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M12 2L2 12"
          ></path>
        </svg>
      </div>
      <SelectTranslator translator={translator} setTranslator={setTranslator} />
      <div className="block">
        <button
          type="button"
          className="block w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
          onClick={() => navigate('/')}
        >
          Save
        </button>
      </div>
    </div>
  );
};
