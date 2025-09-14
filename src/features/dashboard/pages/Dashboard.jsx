import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Dashboard() {
  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <SideBar />
        <div className="flex-1">
          <NavBar />
          <div className="p-6">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

