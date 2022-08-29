import { useState } from 'react';
import LogoIcon from 'components/icons/LogoIcon';
import { NavLink } from 'react-router-dom';

export interface IIcon {
  showHome?: boolean;
}

const Navbar: React.FC<IIcon> = ({ showHome = false }) => {
  return (
    <nav className="flex items-center justify-between sm:px-16 px-4 py-1 mx-auto w-full bg-teal-color">
      <div className="flex items-center text-white mr-6">
        <LogoIcon height={20} width={20} className="mr-2" />
        <span className="text-white text-xl font-bold">Splitwise</span>
      </div>
      <div className="flex">
        <NavLink
          to="/dashboard"
          className={`${
            showHome ? '' : 'hidden'
          } flex justify-between items-center py-1 px-2 w-full font-medium text-white rounded hover:bg-teal-500`}
        >
          Home
        </NavLink>
        <div>
          <button
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            className="flex justify-between items-center py-1 px-2 w-full font-medium text-white rounded hover:bg-teal-500"
          >
            <img className="mr-2 rounded-full" src="/avatar.jpg" height="20px" width="20px" />
            Username{' '}
            <svg
              className="ml-1 w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            id="dropdownNavbar"
            className="hidden z-10 w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-400"
              aria-labelledby="dropdownLargeButton"
            >
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
            </ul>
            <div className="py-1">
              <a
                href="#"
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
