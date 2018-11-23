import React from 'react';
import { shallow } from 'enzyme';
import CarDetail from './CarDetail';

describe('<CarDetail />', () => {
  test('renders', () => {
    const wrapper = shallow(<CarDetail />);
    expect(wrapper).toMatchSnapshot();
  });
});
