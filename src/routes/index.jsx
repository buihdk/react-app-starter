import React, { memo, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const HomePage = lazy(() => import('pages/Home'));
const UserPage = lazy(() => import('pages/User'));
const NotFoundPage = lazy(() => import('pages/NotFound'));

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
    <Route exact path="/home" component={() => <HomePage />} />
    <Route exact path="/mock-users" component={() => <UserPage />} />
    <Route path="*" component={() => <NotFoundPage />} />
  </Switch>
);

export default memo(Routes);
