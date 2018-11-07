import React from 'react';
import { shallow } from 'enzyme';
import Giphy from '../../src/containers/Giphy';

describe('App components', () => {
  it('should render app', () => {
    const wrapper  = shallow(<Giphy />);

    expect(wrapper).toMatchSnapshot()
  })
});
