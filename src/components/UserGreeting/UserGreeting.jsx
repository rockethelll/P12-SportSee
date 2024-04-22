const UserGreeting = ({ firstName }) => {
  return (
    <div className='user-greeting'>
      <h1>
        Bonjour <span>{firstName}</span>
      </h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default UserGreeting;
