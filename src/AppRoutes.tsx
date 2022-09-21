import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import FirstPage from 'pages/FirstPage';
import Dashboard from 'pages/Dashboard';
import ActivityBar from 'components/layouts/bars/ActivityBar';
import DashboardBar from 'components/layouts/bars/DashboardBar';
import AllBar from 'components/layouts/bars/AllBar';
import FriendBar from 'components/layouts/bars/FriendBar';
import ProfilePage from 'pages/ProfilePage';
import SignUpPage from 'pages/SignUpPage';
import LoginPage from 'pages/LoginPage';
import NotFound from 'pages/NotFound';
import Calculators from 'pages/Calculators';
import Contact from 'pages/Contact';
import Type1NavbarLayout from 'components/layouts/Type1NavbarLayout';
import Type2NavbarLayout from 'components/layouts/Type2NavbarLayout';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from 'components/private-route/PrivateRoute';
import setAuthToken from 'utils/setAuthToken';
import { store } from 'store';
import { signOut } from 'store/actions';

function AppRoutes() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (store.getState().auth.authInfo?.exp < currentTime) {
      // Logout signOut
      signOut(navigate)(dispatch);

      // Redirect to login
      window.location.href = './login';
    }
    setAuthToken(store.getState().auth.token);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Routes location={location}>
        <Route path="" element={<Type2NavbarLayout />}>
          <Route path="" element={<FirstPage />}></Route>
          <Route path="signup" element={<SignUpPage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
        </Route>
        <Route
          path=""
          element={
            <PrivateRoute>
              <Type1NavbarLayout />
            </PrivateRoute>
          }
        >
          <Route path="" element={<Dashboard />}>
            <Route path="activity" element={<ActivityBar />} />
            <Route path="dashboard" element={<DashboardBar />} />
            <Route path="all" element={<AllBar />} />
            <Route path="friends/:id" element={<FriendBar />} />
          </Route>
          <Route path="profile" element={<ProfilePage />}></Route>
          <Route path="calculators" element={<Calculators />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>
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
  );
}

export default AppRoutes;
