import React from 'react';
import { shallow } from 'enzyme';
import I18n from 'i18n-js';

import App from './App';

const tSpy = jest
  .spyOn(I18n, 't')
  .mockReturnValueOnce('mock translated title')
  .mockReturnValueOnce('mock translated description');

describe('App', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
    expect(tSpy).toBeCalledTimes(2);
  });
});
