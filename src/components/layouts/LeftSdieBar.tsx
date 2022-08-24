import LogoIcon from 'components/icons/LogoIcon';

const LeftSideBar = () => {
  return (
    <div>
      <a href="#/dashboard" id="dashboard_link" className="flex items-center">
        <LogoIcon />
        Dashboard
      </a>
    </div>
  );
};

export default LeftSideBar;
