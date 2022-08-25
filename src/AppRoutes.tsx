import LoginPage from 'pages/LoginPage';
import Dashboard from 'pages/Dashboard';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

function AppRoutes() {
  const location = useLocation();
  return (
    <div className="w-full flex flex-col">
      <Routes location={location}>
        <Route path="" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="*" element={<Navigate to="" />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
