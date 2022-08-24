import HomePage from 'pages/HomePage';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

function AppRoutes() {
  const location = useLocation();
  return (
    <div className="w-full flex flex-col">
      <Routes location={location}>
        <Route path="" element={<HomePage />}></Route>
        <Route path="*" element={<Navigate to="" />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
