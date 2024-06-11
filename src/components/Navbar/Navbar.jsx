import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <img
        src='/images/logo.png'
        alt='Sport See logo'
        className='h-10 ml-8 xl:w-44 xl:h-14'
      />
      <div className='flex items-center justify-between w-full mx-[100px]'>
        <Link to='/' className='nav-link'>
          Accueil
        </Link>
        <Link to='/' className='nav-link'>
          Profil
        </Link>
        <Link to='/' className='nav-link'>
          Réglage
        </Link>
        <Link to='/' className='nav-link'>
          Communauté
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
