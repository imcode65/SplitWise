import { NavLink } from 'react-router-dom';
import LogoIcon from 'components/icons/LogoIcon';

const LoginNavbar = () => {
  return (
    <nav className="flex items-center justify-between px-16 py-5 mx-auto w-full">
      <div className="flex items-center text-white mr-6">
        <LogoIcon width={48} height={48} className="mr-2" />
        <span className="text-gray-700 text-xl font-bold">Splitwise</span>
      </div>
      <NavLink
        to="/dashboard"
        className="cursor-pointer text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Connect Wallet
      </NavLink>
    </nav>
  );
};

export default LoginNavbar;
