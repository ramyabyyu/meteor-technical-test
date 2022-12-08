import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Path from './name';
import Layout from '../widgets/Layout';
const Auth = lazy(() => import('../pages/Auth'));
const Home = lazy(() => import('../pages/Home'));
const BookDetail = lazy(() => import('../pages/BookDetail'));

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
          path={Path.BookDetail}
          element={
            <Layout>
              <BookDetail />
            </Layout>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
