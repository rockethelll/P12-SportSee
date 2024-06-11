import Navbar from '@/components/Navbar/Navbar';
import Sidebar from '@/components/Sidebar/Sidebar';
import Router from '@/Router/Router';

const App = () => {
  return (
    <div className='overflow-auto min-w-screen-min min-h-screen-min'>
      <Navbar />
      <div className=''>
        <Sidebar />
        <Router />
      </div>
    </div>
  );
};

export default App;
