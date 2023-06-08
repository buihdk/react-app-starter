import React, { lazy, memo } from 'react';
import { createBrowserRouter, useRouteError, Routes, Route, RouterProvider } from 'react-router-dom';

const HomePage = lazy(() => import('pages/Home'));
const UserPage = lazy(() => import('pages/User'));
const NotFoundPage = lazy(() => import('pages/NotFound'));

const ErrorBoundary = () => {
  const error = useRouteError();
  console.error(('Error logged: ', error));
  return <div>Dang!</div>;
};

const Root = () => (
  <Routes>
    <Route path="/home" element={<HomePage />} errorElement={<ErrorBoundary />} />
    <Route path="/mock-users" element={<UserPage />} errorElement={<ErrorBoundary />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

const router = createBrowserRouter([
  { path: '/', Component: HomePage },
  { path: '*', Component: Root },
]);

const RoutesV6 = () => <RouterProvider router={router} />;

export default memo(RoutesV6);
