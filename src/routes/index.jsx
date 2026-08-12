import React, { lazy, memo } from 'react';
import { createBrowserRouter, useRouteError, RouterProvider } from 'react-router-dom';

const HomePage = lazy(() => import('pages/Home'));
const UserPage = lazy(() => import('pages/User'));
const NotFoundPage = lazy(() => import('pages/NotFound'));

const ErrorBoundary = () => {
  const error = useRouteError();
  console.error('Error logged: ', error);
  return <div>Dang!</div>;
};

const router = createBrowserRouter([
  { path: '/', Component: HomePage, errorElement: <ErrorBoundary /> },
  { path: '/home', Component: HomePage, errorElement: <ErrorBoundary /> },
  { path: '/mock-users', Component: UserPage, errorElement: <ErrorBoundary /> },
  { path: '*', Component: NotFoundPage },
]);

const RoutesV6 = () => <RouterProvider router={router} />;

export default memo(RoutesV6);
</content>
</invoke>
