import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <p>Erreur 404 la page n'est pas trouvée</p>
      <Link to="/" className="link-error">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default ErrorPage;
