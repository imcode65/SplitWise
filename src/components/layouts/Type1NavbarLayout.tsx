import { Outlet } from 'react-router-dom';
import Navbar from 'components/navbars/Navbar';

const Type1NavbarLayout = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Type1NavbarLayout;
