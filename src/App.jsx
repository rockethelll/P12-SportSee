import Navbar from '@/components/Navbar/Navbar';
import Sidebar from '@/components/Sidebar/Sidebar';
import Router from '@/Router/Router';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='main'>
        <Sidebar />
        <Router />
      </div>
    </>
  );
};

export default App;
