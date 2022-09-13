import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from 'store/hooks';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { auth } = useAppSelector((state) => state);
  if (!auth.isLogged) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
