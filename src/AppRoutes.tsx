import LoginPage from 'pages/FirstPage';
import Dashboard from 'pages/Dashboard';
import ActivityBar from 'components/layouts/bars/ActivityBar';
import DashboardBar from 'components/layouts/bars/DashboardBar';
import AllBar from 'components/layouts/bars/AllBar';
import ProfilePage from 'pages/ProfilePage';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

function AppRoutes() {
  const location = useLocation();
  return (
    <div className="w-full flex flex-col h-screen">
      <Routes location={location}>
        <Route path="" element={<LoginPage />}></Route>
        <Route path="" element={<Dashboard />}>
          <Route path="activity" element={<ActivityBar />} />
          <Route path="dashboard" element={<DashboardBar />} />
          <Route path="all" element={<AllBar />} />
        </Route>
        <Route path="profile" element={<ProfilePage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="*" element={<Navigate to="" />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
