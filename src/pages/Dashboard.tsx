import LeftSideBar from 'components/layouts/LeftSdieBar';
import RightSideBar from 'components/layouts/RightSideBar';
import Navbar from 'components/layouts/Navbar';

const Dashboard = () => {
  return (
    <div className="w-full">
      <Navbar></Navbar>
      <div className="grid grid-cols-6 gap-4 px-16">
        <div className="col-span-1">
          <LeftSideBar />
        </div>
        <div className="col-start-2 col-span-4 border-l-1 border-r-1 border-gray-600">
          <div className="bg-[#eee] flex p-4">
            <span className="text-3xl font-semibold">Dashboard</span>
          </div>
        </div>
        <div className="col-span-1">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
