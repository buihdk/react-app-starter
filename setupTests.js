import { TextEncoder, TextDecoder } from 'util';
import '@testing-library/jest-dom';

// jsdom does not provide these. react-router needs them.
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock fetch
global.fetch = require('jest-fetch-mock');

// Mock localStorage as it is a browser thing and not available in the test environment (vDOM)
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// The app mounts into #root, so provide it.
document.body.innerHTML = '<div id="root"></div>';
