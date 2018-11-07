import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('App components', () => {
  test('should render app component', () => {
    const wrapper  = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  })
});
