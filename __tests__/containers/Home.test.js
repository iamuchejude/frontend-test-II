import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../src/containers/Home';

describe('App components', () => {
  it('should render app', () => {
    const wrapper  = shallow(<Home />);

    expect(wrapper).toMatchSnapshot()
  })
});
