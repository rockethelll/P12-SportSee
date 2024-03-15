import { Route, Routes } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Profile from '../pages/Profile/Profile';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
