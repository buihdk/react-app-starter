import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

// Setup enzyme
configure({ adapter: new Adapter() });

// Setup snapshotSerializers
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

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
