import LoginPage from 'pages/LoginPage';
import Dashboard from 'pages/Dashboard';
import Navbar from 'components/layouts/Navbar';
import FooterBar from 'components/layouts/FooterBar';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

function AppRoutes() {
  const location = useLocation();
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Routes location={location}>
        <Route path="" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          {/* <Route path="/dashboard" element={<Dashboard />}></Route> */}
        </Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="*" element={<Navigate to="" />} />
      </Routes>
      <FooterBar />
    </div>
  );
}

export default AppRoutes;
