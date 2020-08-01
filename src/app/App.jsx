import React from 'react';
import { hot } from 'react-hot-loader/root';
import I18n from 'i18n-js';

import PacMan from 'src/components/PacMan';

const App = () => (
  <>
    <h1>{I18n.t('title')}</h1>
    <p>{I18n.t('instruction')}</p>
    <p>
      {`Environment variables such as DB_HOST = ${process.env.DB_HOST} 
      and DB_PASS = ${process.env.DB_PASS} are located in .env file`}
    </p>
    <PacMan />
  </>
);

export default hot(App);
