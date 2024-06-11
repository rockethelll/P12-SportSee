const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='flex flex-col translate-y-[-90px]'>
        <img
          className='mb-5 sidebar-img'
          src='/images/meditation.png'
          alt='Meditation icon'
        />
        <img
          className='mb-5 sidebar-img'
          src='/images/swim.png'
          alt='Swiming icon'
        />
        <img
          className='mb-5 sidebar-img'
          src='/images/bike.png'
          alt='Biking icon'
        />
        <img
          className='sidebar-img'
          src='/images/musculation.png'
          alt='Musculation icon'
        />
      </div>
      <p className='absolute bottom-[200px] text-white text-xs w-[150px] -rotate-90'>
        Copiryght, SportSee 2020
      </p>
    </div>
  );
};

export default Sidebar;
