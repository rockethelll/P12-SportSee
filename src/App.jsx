import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Router from '@/router/router';

const App = () => {
  return (
    <div className='overflow-auto min-w-screen-min min-h-screen-min'>
      <Navbar />
      <div>
        <Sidebar />
        <Router />
      </div>
    </div>
  );
};

export default App;
