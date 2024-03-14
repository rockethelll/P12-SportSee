import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <img src="./images/image.png" alt="logo de test" />
      <div className="navlinks">
        <Link to="/">Accueil</Link>
        <Link to="/test">Test</Link>
      </div>
    </nav>
  );
};

export default Navbar;
