import React from 'react';
import { shallow } from 'enzyme';
import CarList from './CarList';

describe('<CarList />', () => {
  test('renders', () => {
    const wrapper = shallow(<CarList />);
    expect(wrapper).toMatchSnapshot();
  });
});
