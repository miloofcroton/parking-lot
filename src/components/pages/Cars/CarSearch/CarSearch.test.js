import React from 'react';
import { shallow } from 'enzyme';
import CarSearch from './CarSearch';

describe('<CarSearch />', () => {
  test('renders', () => {
    const wrapper = shallow(<CarSearch />);
    expect(wrapper).toMatchSnapshot();
  });
});
