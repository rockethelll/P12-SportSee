import { Link } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

/**
 * Error page
 * @return {JSX.Element} - Error page
 */
const ErrorPage = () => {
  return (
    <div className='overflow-auto min-w-screen-min min-h-screen-min'>
      <Navbar />
      <div>
        <Sidebar />
        <div className='flex flex-col items-center justify-center w-full text-2xl font-bold h-svh'>
          <p>
            Erreur <span className='text-secondary'>404</span>, la page demandée
            est introuvable
          </p>
          <Link to='/' className='mt-10 text-base'>
            Retourner sur la page d'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
