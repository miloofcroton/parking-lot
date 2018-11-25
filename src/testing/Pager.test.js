import React from 'react';
import { shallow } from 'enzyme';
import Pager from '../components/lib/Pager.jsx';

describe('<Pager />', () => {
  test('renders', () => {
    const wrapper = shallow(<Pager />);
    expect(wrapper).toMatchSnapshot();
  });
});
