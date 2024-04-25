import SelectUser from '@/components/SelectUser/SelectUser';

const Home = () => {
  return (
    <div className='container user-select-container'>
      <h1>Veuillez sélectionner un profil utilsateur</h1>
      <div className='user-link'>
        <SelectUser id={12} name='Karl' />
        <SelectUser id={18} name='Cécilia' />
      </div>
    </div>
  );
};

export default Home;
