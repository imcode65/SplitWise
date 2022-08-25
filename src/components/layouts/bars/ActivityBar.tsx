const ActivityBar = () => {
  return (
    <div>
      <div className="bg-[#eee] flex py-2 px-4 border-b-1 border-gray-600 flex-wrap">
        <span className="md:text-3xl sm:text-xl font-semibold">Recent activity</span>
      </div>
      <div className="px-4">
        <p className="text-lg text-gray-500 mt-4">
          There is no activity in your account yet. Try adding an expense!
        </p>
      </div>
    </div>
  );
};

export default ActivityBar;
