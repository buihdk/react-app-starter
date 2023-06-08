import React, { lazy, memo } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const HomePage = lazy(() => import('pages/Home'));
const UserPage = lazy(() => import('pages/User'));
const NotFoundPage = lazy(() => import('pages/NotFound'));

const RoutesV6 = () => (
  <Routes>
    <Route path="/" element={<Navigate replace to="/home" />} />
    <Route path="home" element={<HomePage />} />
    <Route path="mock-users" element={<UserPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default memo(RoutesV6);
