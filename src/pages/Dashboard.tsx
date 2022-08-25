import LeftSideBar from 'components/layouts/LeftSdieBar';
import RightSideBar from 'components/layouts/RightSideBar';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-6 gap-4 px-16">
      <div className="col-span-1">
        <LeftSideBar />
      </div>
      <div className="col-start-2 col-span-4 border-2">
        <h1>Dashboard</h1>
      </div>
      <div className="col-span-1">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Dashboard;
