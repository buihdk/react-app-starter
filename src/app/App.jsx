import React, { Suspense } from 'react';
// import { hot } from 'react-hot-loader/root';

import Routes from 'routes';
import './App.css';

const App = () => (
  <Suspense fallback={<div className="loading-app" />}>
    <Routes />
  </Suspense>
);

export default App;
