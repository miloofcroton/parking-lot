import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/app/App.jsx';


describe('<App />', () => {
  test('renders', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
