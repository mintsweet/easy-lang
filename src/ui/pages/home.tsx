import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Dropdown, SelectLang, FileUpload } from '@/components';
import { useTranslator } from '@/context';

export const Home = () => {
  const [fromLang, setFromLang] = useState('English');
  const [toLang, setToLang] = useState('简体中文');

  const navigate = useNavigate();
  const [translator] = useTranslator();

  useEffect(() => {
    if (!translator) {
      navigate('/onboard');
    }
  }, [translator]);

  const handleSwapLang = () => {
    setFromLang(toLang);
    setToLang(fromLang);
  };

  const handleDropdownClick = (key: string) => {
    navigate(key);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-end mb-6">
        <Dropdown
          items={[{ key: 'settings', label: 'Settings' }]}
          onClick={handleDropdownClick}
        >
          <svg
            className="w-6 h-6 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            ></path>
          </svg>
        </Dropdown>
      </div>
      <div className="flex justify-between items-center">
        <SelectLang type="from" value={fromLang} onChange={setFromLang} />
        <svg
          className="w-6 h-6 text-gray-500 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 18"
          onClick={handleSwapLang}
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3"
          ></path>
        </svg>
        <SelectLang type="to" value={toLang} onChange={setToLang} />
      </div>
      <div className="mt-8">
        <FileUpload />
      </div>
    </div>
  );
};
