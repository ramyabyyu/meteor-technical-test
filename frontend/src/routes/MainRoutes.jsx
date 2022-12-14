import React, { lazy, Suspense } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Path from './name';
import Layout from '../widgets/Layout';
const Auth = lazy(() => import('../pages/Auth'));
const Home = lazy(() => import('../pages/Home'));
const BookDetail = lazy(() => import('../pages/BookDetail'));
const Admin = lazy(() => import('../pages/Admin'));

const MainRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Unprivate Routes */}
        <Route path={Path.Auth} element={<Auth />} />
        <Route
          path={Path.Home}
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/book/detail/:id"
          element={
            <Layout>
              <BookDetail />
            </Layout>
          }
        />
        <Route path={Path.Admin} element={<Admin />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
