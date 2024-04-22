const UserInfoCard = ({ category, text }) => {
  return (
    <div className='card'>
      <img src={`/images/${category}.png`} alt={category} />
      <div className='card__text'>
        <h2>1,930kCal</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default UserInfoCard;
