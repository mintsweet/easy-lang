import { useEffect, useState } from 'react';

import { ChatGPT } from './translator';

interface Props {
  translator: ITranslator | null;
  setTranslator: (val: ITranslator | null) => void;
}

export const SelectTranslator = ({ translator, setTranslator }: Props) => {
  const [type, setType] = useState('chatgpt');
  const [config, setConfig] = useState<any>({});

  useEffect(() => {
    if (translator) {
      setType(translator.type);
      setConfig(translator.config);
    }
  }, []);

  useEffect(() => {
    setTranslator({ type, config });
  }, [type, config]);

  return (
    <div className="block">
      <div className="mb-6">
        <label
          htmlFor="select-translator"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Please select a translator
        </label>
        <select
          id="select-translator"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="chatgpt">ChatGPT</option>
        </select>
      </div>
      <div className="mb-6">
        {type === 'chatgpt' && (
          <ChatGPT config={config} setConfig={setConfig} />
        )}
      </div>
    </div>
  );
};
