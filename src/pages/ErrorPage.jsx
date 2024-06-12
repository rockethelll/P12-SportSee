import { Link } from 'react-router-dom';

/**
 * Error page
 * @return {JSX.Element} - Error page
 */
const ErrorPage = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full text-2xl font-bold h-svh'>
      <p>
        Erreur <span className='text-secondary'>404</span>, la page demandée est
        introuvable
      </p>
      <Link to='/profile/12' className='mt-10 text-base'>
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default ErrorPage;
