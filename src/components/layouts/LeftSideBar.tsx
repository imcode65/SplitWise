import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'store/hooks';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import InviteFriendsForm from 'components/forms/InviteFriendsForm';
import InvitieFriendsModal from 'components/modals/InviteFriendsModal';
import LogoIcon from 'components/icons/LogoIcon';
import FlagIcon from 'components/icons/FlagIcon';
import ListIcon from 'components/icons/ListIcon';
import PlusIcon from 'components/icons/PlusIcon';
import UserIcon from 'components/icons/UserIcon';
import { getFriendsByID } from 'store/actions';

const LeftSideBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { auth, friend } = useAppSelector((state) => state);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [flag, setFlag] = useState(true);

  const onSaveModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (auth.authInfo === undefined) {
      return;
    }
    const data = {
      id: auth.authInfo._id
    };
    getFriendsByID(data)(dispatch);
  }, []);

  return (
    <>
      <div className="flex flex-no-wrap">
        <div className="w-64 absolute sm:relative md:h-full flex-col justify-between hidden sm:flex space-y-2">
          <div className="">
            <ul className="mt-4">
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-2">
                <div className="flex items-center">
                  <NavLink
                    to="/dashboard"
                    className={`flex items-center px-2 hover:bg-gray-200 ${
                      location.pathname === '/dashboard'
                        ? 'text-teal-color font-bold border-l-4 border-teal-500'
                        : 'text-gray-500 ml-1'
                    }`}
                  >
                    <LogoIcon width={20} height={20} className="grow-0 shrink-0" />
                    <span className="ml-1">Dashboard</span>
                  </NavLink>
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-2">
                <div className="flex items-center">
                  <NavLink
                    to="/activity"
                    className={`flex items-center px-2 hover:bg-gray-200 ${
                      location.pathname === '/activity'
                        ? 'text-teal-color font-bold border-l-4 border-teal-500'
                        : 'text-gray-500 ml-1'
                    }`}
                  >
                    <FlagIcon width={20} height={20} className="grow-0 shrink-0" />
                    <span className="ml-1">Recent Activity</span>
                  </NavLink>
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center">
                <div className="flex items-center">
                  <NavLink
                    to="/all"
                    className={`flex items-center px-2 hover:bg-gray-200 ${
                      location.pathname === '/all'
                        ? 'text-teal-color font-bold border-l-4 border-teal-500'
                        : 'text-gray-500 ml-1'
                    }`}
                  >
                    <ListIcon width={20} height={20} className="grow-0 shrink-0" />
                    <span className="ml-1">All expenses</span>
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex px-2 justify-between text-gray-400 hover:bg-gray-200 hover:text-gray-600 text-sm bg-gray-100">
            <span>GROUPS</span>
            <div className="flex items-center cursor-pointer">
              <PlusIcon width={12} height={12} />
              <span>ADD</span>
            </div>
          </div>
          <div>
            <div className="flex px-2 justify-between text-gray-400 hover:bg-gray-200 hover:text-gray-600 text-sm bg-gray-100">
              <span>FRIENDS</span>
              <div className="flex items-center cursor-pointer" onClick={() => setIsOpen(true)}>
                <PlusIcon width={12} height={12} />
                <span>ADD</span>
              </div>
            </div>
            <div className="p-1 space-y-1">
              {friend.friends !== undefined
                ? friend.friends.map((val: any, key: number) => {
                    const id = auth.authInfo._id !== val.user1._id ? val.user1._id : val.user2._id;
                    return (
                      <NavLink
                        className={`flex items-center px-2 hover:bg-gray-200 ${
                          location.pathname === '/friends/' + id
                            ? 'text-teal-color font-bold border-l-4 border-teal-500'
                            : 'text-gray-500 ml-1'
                        }`}
                        to={`/friends/${id}`}
                        key={key}
                      >
                        <div className="flex hover:bg-gray-200">
                          <UserIcon width={16} height={16} />
                          <span className="ml-1 text-sm text-gray-400">
                            {auth.authInfo._id !== val.user1._id ? val.user1.name : val.user2.name}
                          </span>
                        </div>
                      </NavLink>
                    );
                  })
                : ''}
            </div>
          </div>
          <InviteFriendsForm />
          <button
            type="button"
            className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-md text-sm px-4 py-2 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
          >
            <svg
              className="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook-f"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
              ></path>
            </svg>
            Share
          </button>
          <button
            type="button"
            className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-md text-sm px-4 py-2 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2"
          >
            <svg
              className="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="twitter"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
              ></path>
            </svg>
            Tweet
          </button>
        </div>

        {/* sm sidebar start */}
        <div
          className={`transform w-44 z-40 h-full absolute px-2 bg-white shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out ${
            flag ? '-translate-x-44' : ''
          }`}
        >
          <div
            className="h-10 w-10 bg-teal-color absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer"
            id="mobile-toggler"
            onClick={() => setFlag(!flag)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-adjustments"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FFFFFF"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx={6} cy={10} r={2} />
              <line x1={6} y1={4} x2={6} y2={8} />
              <line x1={6} y1={12} x2={6} y2={20} />
              <circle cx={12} cy={16} r={2} />
              <line x1={12} y1={4} x2={12} y2={14} />
              <line x1={12} y1={18} x2={12} y2={20} />
              <circle cx={18} cy={7} r={2} />
              <line x1={18} y1={4} x2={18} y2={5} />
              <line x1={18} y1={9} x2={18} y2={20} />
            </svg>
          </div>
          <div className="">
            <ul className="mt-4">
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-2">
                <div className="flex items-center">
                  <NavLink
                    to="/dashboard"
                    className={`flex items-center px-2 hover:bg-gray-200 ${
                      location.pathname === '/dashboard'
                        ? 'text-teal-color font-bold border-l-4 border-teal-500'
                        : 'text-gray-500 ml-1'
                    }`}
                  >
                    <LogoIcon width={20} height={20} className="grow-0 shrink-0" />
                    <span className="ml-1">Dashboard</span>
                  </NavLink>
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-2">
                <div className="flex items-center">
                  <NavLink
                    to="/activity"
                    className={`flex items-center px-2 hover:bg-gray-200 ${
                      location.pathname === '/activity'
                        ? 'text-teal-color font-bold border-l-4 border-teal-500'
                        : 'text-gray-500 ml-1'
                    }`}
                  >
                    <FlagIcon width={20} height={20} className="grow-0 shrink-0" />
                    <span className="ml-1">Recent Activity</span>
                  </NavLink>
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center">
                <div className="flex items-center">
                  <NavLink
                    to="/all"
                    className={`flex items-center px-2 hover:bg-gray-200 ${
                      location.pathname === '/all'
                        ? 'text-teal-color font-bold border-l-4 border-teal-500'
                        : 'text-gray-500 ml-1'
                    }`}
                  >
                    <ListIcon width={20} height={20} className="grow-0 shrink-0" />
                    <span className="ml-1">All expenses</span>
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex px-2 justify-between text-gray-400 hover:bg-gray-200 hover:text-gray-600 text-sm bg-gray-100 mb-2">
            <span>GROUPS</span>
            <div className="flex items-center cursor-pointer">
              <PlusIcon width={12} height={12} />
              <span>ADD</span>
            </div>
          </div>
          <div>
            <div className="flex px-2 justify-between text-gray-400 hover:bg-gray-200 hover:text-gray-600 text-sm bg-gray-100">
              <span>FRIENDS</span>
              <div className="flex items-center cursor-pointer" onClick={() => setIsOpen(true)}>
                <PlusIcon width={12} height={12} />
                <span>ADD</span>
              </div>
            </div>
            <div className="p-1 space-y-1">
              {friend.friends !== undefined
                ? friend.friends.map((val: any, key: number) => {
                    const id = auth.authInfo._id !== val.user1._id ? val.user1._id : val.user2._id;
                    return (
                      <NavLink
                        className={`flex items-center px-2 hover:bg-gray-200 ${
                          location.pathname === '/friends/' + id
                            ? 'text-teal-color font-bold border-l-4 border-teal-500'
                            : 'text-gray-500 ml-1'
                        }`}
                        to={`/friends/${id}`}
                        key={key}
                      >
                        <div className="flex hover:bg-gray-200">
                          <UserIcon width={16} height={16} />
                          <span className="ml-1 text-sm text-gray-400">
                            {auth.authInfo._id !== val.user1._id ? val.user1.name : val.user2.name}
                          </span>
                        </div>
                      </NavLink>
                    );
                  })
                : ''}
            </div>
          </div>
          <InviteFriendsForm />
          <button
            type="button"
            className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-md text-sm px-4 py-2 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
          >
            <svg
              className="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook-f"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
              ></path>
            </svg>
            Share
          </button>
          <button
            type="button"
            className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-md text-sm px-4 py-2 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2"
          >
            <svg
              className="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="twitter"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
              ></path>
            </svg>
            Tweet
          </button>
        </div>
      </div>

      <InvitieFriendsModal isOpen={isOpen} onClose={() => setIsOpen(false)} onSave={onSaveModal} />
    </>
  );
};

export default LeftSideBar;
