const UserInfoCard = ({ category, text, data }) => {
  return (
    <div className='card'>
      <img src={`/images/${category}.png`} alt={category} />
      <div className='card__text'>
        <h2>{data}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default UserInfoCard;
