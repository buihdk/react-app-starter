// Mock localStorage as it is a browser thing and not available in the test environment (vDOM)
global.localStorage = require('jest-localstorage-mock');

// Mock fetch
global.fetch = require('jest-fetch-mock');

// Setup I18n with en locale
const I18n = require('i18n-js');

const locale = 'en';
const en = require(`src/locales/${locale}.json`);
I18n.translations[locale] = en;
I18n.locale = locale;
