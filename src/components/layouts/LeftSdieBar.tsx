import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoIcon from 'components/icons/LogoIcon';

const LeftSideBar = () => {
  const [pageState, setPageState] = useState('dashboard');

  const onChangePageState = (state: string) => {
    setPageState(state);
  };

  return (
    <div className="p-2">
      <NavLink
        to="/dashboard"
        onClick={() => onChangePageState('dashboard')}
        id="dashboard_link"
        className={`flex items-center px-2 hover:bg-gray-200 mb-2 ${
          pageState === 'dashboard'
            ? 'text-teal-400 font-bold border-l-4 border-teal-500'
            : 'text-gray-500 ml-1'
        }`}
      >
        <LogoIcon />
        <span className="ml-1">Dashboard</span>
      </NavLink>
      <NavLink
        to="/dashboard"
        onClick={() => onChangePageState('activity')}
        id="dashboard_link"
        className={`flex items-center px-2 hover:bg-gray-200 ${
          pageState === 'activity'
            ? 'text-teal-400 font-bold border-l-4 border-teal-500'
            : 'text-gray-500 ml-1'
        }`}
      >
        <LogoIcon />
        <span className="ml-1">Recent Activity</span>
      </NavLink>
    </div>
  );
};

export default LeftSideBar;
