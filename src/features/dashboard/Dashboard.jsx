import { Outlet } from 'react-router-dom';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import Footer from './components/Footer';



export default function Dashboard() {
  return (
    <div className="flex flex-col h-full font-poppins overflow-y-hidden">
      <div className="flex-1 flex flex-col bg-gray-50 overflow-y-auto">
        <div className="flex h-full">
          <SideBar />
          <div className="flex-1 bg-light-background overflow-y-auto">
            <NavBar />
            <div className='overflow-scroll h-[87vh] max-h-[87vh]'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Footer className="absolute bottom-0 w-full" />
    </div>
  );
}

