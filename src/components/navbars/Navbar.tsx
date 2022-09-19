import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import LogoIcon from 'components/icons/LogoIcon';
import { useAppSelector } from 'store/hooks';
import WalletModal from 'components/modals/WalletModal';
import { signOut } from 'store/actions';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authInfo } = useAppSelector((state) => state.auth);
  const userNavigation = [
    { name: 'Your account', href: '/profile', onClick: () => {} },
    { name: 'Create a group', href: '#', onClick: () => {} },
    { name: 'Fairness calculators', href: '/calculators', onClick: () => {} },
    { name: 'Contact support', href: '/contact', onClick: () => {} },
    {
      name: 'SingOut',
      href: '#',
      onClick: () => onSignOut()
    }
  ];
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {}, []);

  const onSignOut = () => {
    signOut(navigate)(dispatch);
  };

  const onSaveModal = () => {
    setIsOpen(false);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Disclosure as="nav" className="bg-teal-color">
        {({ open }) => (
          <>
            <div className="max-w-[96rem] mx-auto px-4 sm:px-16 lg:px-20">
              <div className="flex items-center justify-between h-12">
                <div className="flex items-center">
                  <div className="flex">
                    <LogoIcon height={24} width={24} className="mr-2" />
                    <span className="text-white text-xl font-bold">Splitwise</span>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <Menu as="div" className="ml-3 relative">
                      <div className="flex space-x-2">
                        <NavLink
                          to="/dashboard"
                          className={`items-center py-1 px-2 font-medium text-white rounded-full focus:outline-none focus:ring-2 focus:ring-white`}
                        >
                          Home
                        </NavLink>
                        <button
                          onClick={() => setIsOpen(true)}
                          className={`items-center py-1 px-2 font-medium text-white rounded-full focus:outline-none focus:ring-2 focus:ring-white`}
                        >
                          Wallet
                        </button>
                        <Menu.Button className="max-w-xs bg-teal-color rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-white">
                          <img
                            className="h-8 w-8 rounded-full mr-1"
                            src={authInfo?.avatar ? authInfo.avatar : './avatar.png'}
                            alt="No Image"
                          />
                          <span className="text-white font-semibold">{authInfo?.name}</span>
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
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-1">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <NavLink
                                  key={item.name}
                                  to={item.href}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700  hover:bg-teal-color'
                                  )}
                                  onClick={item.onClick}
                                >
                                  {item.name}
                                </NavLink>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  <Disclosure.Button className="bg-teal-color inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-teal-200 focus:outline-1 focus:ring-1 focus:ring-offset-2 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="pb-3 border-t border-gray-700">
                <div className="mt-3 px-2 space-y-1">
                  <NavLink
                    to="/dashboard"
                    className={`block items-center px-3 py-2 font-medium text-white rounded-md hover:bg-teal-500`}
                  >
                    Home
                  </NavLink>
                  <button
                    onClick={() => setIsOpen(true)}
                    className={`w-full items-center text-left px-3 py-2 font-medium text-white rounded-md hover:bg-teal-500`}
                  >
                    Wallet
                  </button>
                  {userNavigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      onClick={item.onClick}
                      className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-teal-500"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <WalletModal isOpen={isOpen} onClose={onCloseModal} onSave={onSaveModal} />
    </div>
  );
};

export default Navbar;
