import React from 'react';
import { shallow } from 'enzyme';
import ArtistInfo from '../../src/components/ArtistInfo';

describe('ArtistInfo components', () => {
  test('should render Artist info', () => {
    const wrapper  = shallow(<ArtistInfo />);
    expect(wrapper).toMatchSnapshot();
  });
});
