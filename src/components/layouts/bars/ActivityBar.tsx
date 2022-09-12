import RightSideBar from 'components/layouts/RightSideBar';

const ActivityBar = () => {
  return (
    <div className="grid sm:grid-cols-4">
      <div className="col-span-3 border-l-1 border-r-1 border-gray-400">
        <div className="bg-[#eee] flex py-2 px-4 border-b-1 border-gray-400 flex-wrap">
          <span className="md:text-3xl sm:text-xl font-semibold  my-2">Recent activity</span>
        </div>
        <div className="px-4">
          <p className="text-lg text-gray-500 mt-4">
            There is no activity in your account yet. Try adding an expense!
          </p>
        </div>
      </div>
      <div className="col-span-1">
        <RightSideBar />
      </div>
    </div>
  );
};

export default ActivityBar;
