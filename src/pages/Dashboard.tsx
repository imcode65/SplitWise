import { Outlet } from 'react-router-dom';
import LeftSideBar from 'components/layouts/LeftSdieBar';
import RightSideBar from 'components/layouts/RightSideBar';
import Navbar from 'components/navbars/Navbar';

const Dashboard = () => {
  return (
    <div className="w-full">
      <Navbar></Navbar>
      <div className="grid sm:grid-cols-5 gap-4 sm:px-16 px-4">
        <div className="col-span-1">
          <LeftSideBar />
        </div>
        <div className="col-start-2 col-span-3 border-l-1 border-r-1 border-gray-600">
          <Outlet />
        </div>
        <div className="col-span-1">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
