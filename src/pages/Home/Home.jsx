import SelectUser from '@/components/SelectUser/SelectUser';

const Home = () => {
  return (
    <div className='container user-select-container'>
      <h1>Veuillez sélectionner un profile utilsateur</h1>
      <div className='user-link'>
        <SelectUser id={12} />
        <SelectUser id={18} />
      </div>
    </div>
  );
};

export default Home;
