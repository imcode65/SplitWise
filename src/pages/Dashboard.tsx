import { Outlet } from 'react-router-dom';
import LeftSideBar from 'components/layouts/LeftSdieBar';

const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-5 sm:gap-4 lg:px-16 px-0">
        <div className="col-span-1">
          <LeftSideBar />
        </div>
        <div className="col-span-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
