const UserInfoCard = ({ category, text, data }) => {
  return (
    <div className='card'>
      <img
        className='w-[60px] h-[60px] mr-6 ml-8'
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
