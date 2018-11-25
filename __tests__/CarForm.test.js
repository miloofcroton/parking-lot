import React from 'react';
import { shallow } from 'enzyme';
import CarForm from '../src/components/pages/cars/CarForm.jsx';

describe('<CarForm />', () => {
  test('renders', () => {
    const registerCarFn = jest.fn();
    const wrapper = shallow(<CarForm registerCar={registerCarFn} />);
    expect(wrapper).toMatchSnapshot();
  });
});
