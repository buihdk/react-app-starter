import React from 'react';
import { shallow } from 'enzyme';

import PacMan from '.';

describe('PacMan', () => {
  const wrapper = shallow(<PacMan />);

  test('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
