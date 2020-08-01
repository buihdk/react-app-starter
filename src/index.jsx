import React from 'react';
import { render } from 'react-dom';
import I18n from 'i18n-js';

import App from 'src/app/App';
import { generateLogs } from 'src/utils';

const locale = 'en';
const en = require(`src/locales/${locale}.json`);
I18n.translations[locale] = en;
I18n.locale = locale;

generateLogs();

render(<App />, document.getElementById('root'));
