import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Path from './name';
const Auth = lazy(() => import('../pages/Auth'));
const Home = lazy(() => import('../pages/Home'));

const MainRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Unprivate Routes */}
        <Route path={Path.Auth} element={<Auth />} />
        <Route path={Path.Home} element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
