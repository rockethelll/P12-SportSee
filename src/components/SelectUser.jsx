import { Link } from 'react-router-dom';

const SelectUser = ({ id, name }) => {
  return (
    <Link
      to={`/profile/${id}`}
      className='p-5 text-lg font-bold text-center text-white w-36 rounded-3xl bg-primary hover:bg-[#333]'
    >
      {name}
    </Link>
  );
};

export default SelectUser;
