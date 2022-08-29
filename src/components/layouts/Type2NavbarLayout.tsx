import { Outlet } from 'react-router-dom';
import LoginNavbar from 'components/navbars/LoginNavbar';

const Type2NavbarLayout = () => {
  return (
    <div className="w-full">
      <LoginNavbar />
      <Outlet />
    </div>
  );
};

export default Type2NavbarLayout;
