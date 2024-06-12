import SelectUser from '@/components/SelectUser';

const Home = () => {
  return (
    <div className='container pt-8 mx-auto mt-16 xl:pt-16 xl:mt-24 xl:ml-32 pl-28'>
      <h1 className='mt-10 text-4xl font-bold text-center'>
        Veuillez sélectionner un profil utilsateur
      </h1>
      <div className='flex items-center justify-center mt-16 gap-14'>
        <SelectUser id={12} name='Karl' />
        <SelectUser id={18} name='Cécilia' />
      </div>
    </div>
  );
};

export default Home;
