import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

jest.mock('routes', () => () => <div data-testid="routes" />);

describe('App', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('routes')).toBeInTheDocument();
  });
});
