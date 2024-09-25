import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/app/router';

import type { ITranslator } from './context';
import { Context } from './context';

export const App = () => {
  const [translator, setTranslator] = useState<ITranslator | null>(null);

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <Context.Provider
        value={{
          translator,
          setTranslator,
        }}
      >
        <RouterProvider router={router} />
      </Context.Provider>
    </div>
  );
};
