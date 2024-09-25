import { createBrowserRouter } from 'react-router-dom';

import { Home, Onboard } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/onboard',
    element: <Onboard />,
  },
  {
    path: '/',
    element: <Home />,
  },
]);
