import React from 'react';
import { render } from 'react-dom';
import I18n from 'i18n-js';

import App from './app/App';

const locale = 'en';

import(`public/locales/${locale}`).then(res => {
  I18n.translations[locale] = res.default;
  I18n.locale = locale;

  render(<App />, document.getElementById('root'));
});

if (process && process.env) {
  console.warn(`node environment: ${process.env.NODE_ENV}`);
}
