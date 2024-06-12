import { Route, Routes } from 'react-router-dom';

import ErrorPage from '@/pages/ErrorPage';
import Home from '@/pages/Home';
import Profile from '@/pages/Profile';

/**
 * Router component responsible for defining application routes.
 * @returns {JSX.Element} - The Router JSX element.
 */
const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile/:id' element={<Profile />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
