import { createBrowserRouter } from 'react-router-dom';

import Layout from '@/components/Layout';
import ErrorPage from '@/pages/ErrorPage';
import Home from '@/pages/Home';
import Profile from '@/pages/Profile';

/**
 * Router component responsible for defining application routes.
 * @returns {JSX.Element} - The Router JSX element.
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/profile/:id',
        element: <Profile />,
        errorElement: <ErrorPage />,
      },
      { path: 'error', element: <ErrorPage /> },
    ],
  },
]);
export default router;
