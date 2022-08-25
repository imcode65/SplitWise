import LogoIcon from 'components/icons/LogoIcon';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-16 py-5 mx-auto w-full">
      <div className="flex items-center text-white mr-6">
        <LogoIcon />
        <span className="text-gray-700 text-xl font-bold">Splitwise</span>
      </div>
    </nav>
  );
};

export default Navbar;
