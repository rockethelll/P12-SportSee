import { Outlet } from 'react-router';
import { Toaster } from 'sonner';

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

const Layout = () => {
  return (
    <div className='overflow-auto min-w-screen-min min-h-screen-min'>
      <Navbar />
      <div>
        <Sidebar />
        <Toaster closeButton richColors position='top-right' />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
