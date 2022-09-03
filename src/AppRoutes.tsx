import Providers from 'Providers';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import FirstPage from 'pages/FirstPage';
import Dashboard from 'pages/Dashboard';
import ActivityBar from 'components/layouts/bars/ActivityBar';
import DashboardBar from 'components/layouts/bars/DashboardBar';
import AllBar from 'components/layouts/bars/AllBar';
import FriendBar from 'components/layouts/bars/FriendBar';
import ProfilePage from 'pages/ProfilePage';
import SignUpPage from 'pages/SignUpPage';
import NotFound from 'pages/NotFound';
import Type1NavbarLayout from 'components/layouts/Type1NavbarLayout';
import Type2NavbarLayout from 'components/layouts/Type2NavbarLayout';
import { Toaster } from 'react-hot-toast';

function AppRoutes() {
  const location = useLocation();
  return (
    <Providers>
      <div className="flex flex-col h-screen">
        <Routes location={location}>
          <Route path="" element={<Type2NavbarLayout />}>
            <Route path="" element={<FirstPage />}></Route>
            <Route path="signup" element={<SignUpPage />}></Route>
          </Route>
          <Route path="" element={<Type1NavbarLayout />}>
            <Route path="" element={<Dashboard />}>
              <Route path="activity" element={<ActivityBar />} />
              <Route path="dashboard" element={<DashboardBar />} />
              <Route path="all" element={<AllBar />} />
              <Route path="friends/" element={<FriendBar />} />
            </Route>
            <Route path="profile" element={<ProfilePage />}></Route>
          </Route>
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 1500
          }}
        />
      </div>
    </Providers>
  );
}

export default AppRoutes;
