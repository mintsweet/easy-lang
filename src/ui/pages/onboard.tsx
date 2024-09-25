import { useNavigate } from 'react-router-dom';

import { SelectTranslator } from '@/components';
import { useTranslator } from '@/context';

export const Onboard = () => {
  const navigate = useNavigate();
  const [translator, setTranslator] = useTranslator();

  return (
    <div className="flex flex-col">
      <SelectTranslator translator={translator} setTranslator={setTranslator} />
      <div className="block">
        <button
          type="button"
          className="block w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
          onClick={() => navigate('/')}
        >
          Finish
        </button>
      </div>
    </div>
  );
};
