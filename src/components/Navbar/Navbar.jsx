import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <img src="./images/logo.png" alt="Sport See logo" />
      <div className="navlinks">
        <Link to="/">Accueil</Link>
        <Link to="/">Profil</Link>
        <Link to="/">Réglage</Link>
        <Link to="/">Communauté</Link>
      </div>
    </nav>
  );
};

export default Navbar;
