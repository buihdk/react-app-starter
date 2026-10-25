import React from 'react';
import { render } from '@testing-library/react';

import PacMan from '.';

describe('PacMan', () => {
  test('renders without crashing', () => {
    const { container } = render(<PacMan />);
    expect(container.querySelector('.spinner-pac-man')).toBeInTheDocument();
  });
});
