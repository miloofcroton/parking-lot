import React from 'react';
import { shallow } from 'enzyme';
import About from '../components/pages/About.jsx';

describe('<About />', () => {
  test('renders', () => {
    const wrapper = shallow(<About />);
    expect(wrapper).toMatchSnapshot();
  });
});
