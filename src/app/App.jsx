import React from 'react';
import { hot } from 'react-hot-loader/root';
import I18n from 'i18n-js';

const App = () => (
  <>
    <h1>{I18n.t('title')}</h1>
  </>
);

export default hot(App);
