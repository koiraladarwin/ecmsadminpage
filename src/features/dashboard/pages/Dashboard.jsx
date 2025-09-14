import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Dashboard() {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <div className="flex h-full bg-gray-50">
        <SideBar />
        <div className="flex-1 bg-purple-200">
          <NavBar />
          <div >
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

