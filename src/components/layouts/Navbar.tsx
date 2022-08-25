import LogoIcon from 'components/icons/LogoIcon';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-16 py-1 mx-auto w-full bg-teal-color">
      <div className="flex items-center text-white mr-6">
        <LogoIcon height={20} width={20} className="mr-2" />
        <span className="text-white text-xl font-bold">Splitwise</span>
      </div>
    </nav>
  );
};

export default Navbar;
