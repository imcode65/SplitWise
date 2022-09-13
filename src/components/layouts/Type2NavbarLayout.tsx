import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector } from 'store/hooks';
import { useNavigate } from 'react-router';
import LoginNavbar from 'components/navbars/LoginNavbar';

const Type2NavbarLayout = () => {
  const navigate = useNavigate();
  const { isLogged } = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (isLogged === true) {
      navigate('/dashboard');
    }
  }, []);
  return (
    <div className="w-full">
      <LoginNavbar />
      <Outlet />
    </div>
  );
};

export default Type2NavbarLayout;
