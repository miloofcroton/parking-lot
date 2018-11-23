import React from 'react';
import { shallow } from 'enzyme';
import CarFilter from './CarFilter';

describe('<CarFilter />', () => {
  test('renders', () => {
    const wrapper = shallow(<CarFilter />);
    expect(wrapper).toMatchSnapshot();
  });
});
