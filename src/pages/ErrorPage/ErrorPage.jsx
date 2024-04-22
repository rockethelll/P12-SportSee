import { Link } from 'react-router-dom';

/**
 * Error page
 * @return {JSX.Element} - Error page
 */
const ErrorPage = () => {
  return (
    <div className='error404'>
      <p>
        Erreur <span>404</span> la page demandée est introuvable
      </p>
      <Link to='/profile/12' className='link-error'>
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default ErrorPage;
