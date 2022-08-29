import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import LogoIcon from 'components/icons/LogoIcon';
import { NavLink } from 'react-router-dom';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
export interface IIcon {
  showHome?: boolean;
}

const Navbar1: React.FC<IIcon> = ({ showHome = false }) => {
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
        <Menu as="div" className="relative inline-block text-left">
          <div className="flex">
            <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-teal-color text-sm font-medium text-white hover:bg-teal-500">
              <img src="/avatar.jpg" height="20px" width="20x" className="rounded-full mr-2" />
              Username
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 48 48"
                fill="teal"
              >
                <path d="m14 20 10 10 10-10z" />
                <path fill="none" d="M0 0h48v48H0z" />
              </svg>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm rounded hover:bg-teal-color'
                      )}
                    >
                      Account settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm rounded hover:bg-teal-color'
                      )}
                    >
                      Support
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm rounded hover:bg-teal-color'
                      )}
                    >
                      License
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full text-left px-4 py-2 text-sm hover:bg-teal-color'
                      )}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar1;
