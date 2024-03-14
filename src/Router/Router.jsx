import { Route, Routes } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Test from '../pages/Test/Test';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
