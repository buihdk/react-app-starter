import EN from 'public/locales/en';

// Mock localStorage as it is a browser thing and not available in the test environment (vDOM)
global.localStorage = require('jest-localstorage-mock');

// Mock fetch
global.fetch = require('jest-fetch-mock');

// Setup I18n
const I18n = require('i18n-js');

const locale = 'en';
I18n.translations[locale] = EN;
I18n.locale = locale;
