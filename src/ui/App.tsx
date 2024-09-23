import { RouterProvider } from 'react-router-dom';

import { router } from '@/app/router';

export const App = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <RouterProvider router={router} />
    </div>
  );
};
