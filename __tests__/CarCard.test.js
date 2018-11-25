import React from 'react';
import { shallow } from 'enzyme';
import CarCard from '../src/components/pages/cars/CarCard.jsx';

describe('<CarCard />', () => {
  test('renders', () => {
    const wrapper = shallow(
      <CarCard
        plate='abcdef'
        make='Ford'
        model='F150'
        id='123-123-123-123'
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
