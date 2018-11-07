import React from 'react';
import { shallow } from 'enzyme';
import Spotify from '../../src/containers/Spotify';

describe('App components', () => {
  it('should render app', () => {
    const wrapper  = shallow(<Spotify />);

    expect(wrapper).toMatchSnapshot()
  })
});
