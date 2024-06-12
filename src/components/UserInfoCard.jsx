const UserInfoCard = ({ category, text, data }) => {
  return (
    <div className='card'>
      <img
        className='w-16 h-16 ml-6 mr-6'
        src={`/images/${category}.png`}
        alt={category}
      />
      <div>
        <h2 className='mb-1 text-xl font-bold'>{data}</h2>
        <p className='text-sm text-customGrey'>{text}</p>
      </div>
    </div>
  );
};

export default UserInfoCard;
