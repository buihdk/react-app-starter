import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import I18n from 'i18n-js';

import App from 'app/App';
import store from 'modules/store';
import { generateLogs } from 'utils';

const locale = 'en';
const en = require(`locales/${locale}.json`);
I18n.translations[locale] = en;
I18n.locale = locale;

generateLogs();

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
