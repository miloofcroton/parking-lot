import React from 'react';
import { shallow } from 'enzyme';
import CarForm from './CarForm';

describe('<CarForm />', () => {
  test('renders', () => {
    const wrapper = shallow(<CarForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
