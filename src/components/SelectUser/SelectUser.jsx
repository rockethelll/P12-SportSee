import { Link } from 'react-router-dom';

const SelectUser = ({ id, name }) => {
  return (
    <Link to={`/profile/${id}`} className='user-select'>
      {name}
    </Link>
  );
};

export default SelectUser;
