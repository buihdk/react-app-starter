import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import I18n from 'i18n-js';

import HomePage from '.';

describe('HomePage', () => {
  test('renders the translated title and description', () => {
    const tSpy = jest
      .spyOn(I18n, 't')
      .mockReturnValueOnce('mock translated title')
      .mockReturnValueOnce('mock translated description');

    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(screen.getByText('mock translated title')).toBeInTheDocument();
    expect(screen.getByText('mock translated description')).toBeInTheDocument();
    expect(tSpy).toHaveBeenCalledTimes(2);
  });
});
