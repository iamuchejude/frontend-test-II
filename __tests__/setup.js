import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetch from 'jest-fetch-mock';

jest.setMock('node-fetch', fetch);

Enzyme.configure({
  adapter: new Adapter(),
});
