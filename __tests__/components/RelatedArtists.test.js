import React from 'react';
import { shallow } from 'enzyme';
import RelatedArtists from '../../src/components/RelatedArtists';

describe('App components', () => {
  it('should render app', () => {
    const wrapper  = shallow(<RelatedArtists />);

    expect(wrapper).toMatchSnapshot()
  })
});
