import { createBrowserRouter } from 'react-router-dom';

import { Home, Onboard, Settings } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/onboard',
    element: <Onboard />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '/',
    element: <Home />,
  },
]);
