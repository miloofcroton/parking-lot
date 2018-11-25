import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/app/Header.jsx';

describe('<Header />', () => {
  test('renders', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
