import React from 'react';
import { hot } from 'react-hot-loader/root';
import I18n from 'i18n-js';

import PacMan from 'src/components/PacMan';

const App = () => (
  <>
    <h1>{I18n.t('title')}</h1>
    <p>{I18n.t('instruction')}</p>
    <PacMan />
  </>
);

export default hot(App);
