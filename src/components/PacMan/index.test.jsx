import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import PacMan from '.';

describe('PacMan', () => {
  const wrapper = shallow(<PacMan />);

  test('renders without crashing', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
