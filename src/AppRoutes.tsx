import LoginPage from 'pages/LoginPage';
import Dashboard from 'pages/Dashboard';
import LeftSideBar from 'components/layouts/LeftSdieBar';
import Navbar from 'components/layouts/Navbar';
import FooterBar from 'components/layouts/FooterBar';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

function AppRoutes() {
  const location = useLocation();
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div className="container">
        <Routes location={location}>
          {/* <Route path="" element={<LoginPage />}></Route> */}
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          {/* <Route path="*" element={<Navigate to="" />} /> */}
        </Routes>
      </div>
      <FooterBar />
    </div>
  );
}

export default AppRoutes;
