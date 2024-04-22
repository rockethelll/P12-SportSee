import { Link } from 'react-router-dom';

const SelectUser = ({ id }) => {
  return (
    <Link to={`/profile/${id}`} className='user-select'>
      Utilisateur {id}
    </Link>
  );
};

export default SelectUser;
