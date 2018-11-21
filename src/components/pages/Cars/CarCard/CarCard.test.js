import React from 'react';
import { shallow } from 'enzyme';
import CarCard from './CarCard';

describe('<CarCard />', () => {
  test('renders', () => {
    const wrapper = shallow(<CarCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
