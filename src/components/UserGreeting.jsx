const UserGreeting = ({ firstName }) => {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-7 2xl:mb-10 xl:mb-8 xl:text-4xl 2xl:text-5xl'>
        Bonjour <span className='text-secondary'>{firstName}</span>
      </h1>
      <p className='mb-14 2xl:mb-20 xl:text-lg'>
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
};

export default UserGreeting;
