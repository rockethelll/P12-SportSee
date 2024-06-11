const UserGreeting = ({ firstName }) => {
  return (
    <div className='user-greeting'>
      <h1 className='text-3xl font-bold mb-7 xl:mb-10 xl:text-5xl'>
        Bonjour <span className='text-secondary'>{firstName}</span>
      </h1>
      <p className='mb-14 xl:mb-20 xl:text-lg'>
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
};

export default UserGreeting;
