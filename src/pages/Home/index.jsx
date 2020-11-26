import React from 'react';
import { Link } from 'react-router-dom';
import I18n from 'i18n-js';
import PacMan from 'components/PacMan';

const HomePage = () => (
  <>
    <h1>{I18n.t('title')}</h1>
    <p>{I18n.t('instruction')}</p>
    <Link to="/mock-users">Mock Users Page</Link>
    <PacMan />
  </>
);

export default HomePage;
