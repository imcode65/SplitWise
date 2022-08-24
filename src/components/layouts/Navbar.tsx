import LogoIcon from 'components/icons/LogoIcon';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-5 mx-auto w-full">
      <div className="flex items-center text-white mr-6">
        <LogoIcon />
        <span className="font-semibold text-xl tracking-tight">Splitwise</span>
      </div>
      <div className="w-full block lg:flex lg:items-center lg:w-auto">
        <a
          href="/signup"
          // className="text-sm font-bold mb-1 px-3 py-2 sm:px-6 sm:py-4 rounded shadow-lg leading-none bg-teal-500 border text-white hover:shadow-none hover:mt-1 hover:mb-0"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Login
        </a>
        <a
          href="/signup"
          className="cursor-pointer text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Sign up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
