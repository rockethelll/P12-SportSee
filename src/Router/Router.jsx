import { Navigate, Route, Routes } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Profile from '../pages/Profile/Profile';

/**
 * Router component responsible for defining application routes.
 * @returns {JSX.Element} - The Router JSX element.
 */
const Router = () => {
  return (
    <Routes>
      {/* Redirect '/' to 'profile/12' for the project in development */}
      <Route path="/" element={<Navigate replace to="/profile/12" />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
