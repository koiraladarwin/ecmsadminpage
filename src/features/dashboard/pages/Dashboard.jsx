import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideBar />
      <div className="flex flex-col flex-1">
        <NavBar />
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

