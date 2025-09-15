import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';



export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex flex-col bg-gray-50 overflow-y-auto">
        <div className="flex h-full">
          <SideBar />
          <div className="flex-1 bg-purple-200 overflow-y-auto">
            <NavBar />
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Footer className="absolute bottom-0 w-full" />
    </div>
  );
}

