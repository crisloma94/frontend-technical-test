import { shallow } from 'enzyme';
import AllMeetupsPage from './AllMeetupsPage';
import MeetupItem from '../components/meetups/MeetupItem';
import data from './../../public/data.json';

const setFavoritesMock = jest.fn();
function createTestProps(mockData, favorites = []) {
  return {
    data: mockData,
    favorites: favorites,
    setFavorites: setFavoritesMock,
  };
}
let wrapper, props;

describe('<AllMeetupsPage /> rendering', () => {
  describe('Rendering with data', () => {
    beforeEach(() => {
      props = createTestProps(data, data[0]);
      wrapper = shallow(<AllMeetupsPage {...props} />);
    });
    it('Should render without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });
    it('Should render a title', () => {
      expect(wrapper.find('h1')).toHaveLength(1);
    });
    it('Should render all meetupItems', () => {
      expect(wrapper.find(MeetupItem)).toHaveLength(data.length);
    });
  });
  describe('Rendering with still no data', () => {
    it('Should render a loading text', () => {
      props = createTestProps(undefined, []);
      wrapper = shallow(<AllMeetupsPage {...props} />);
      expect(wrapper.find('p').text()).toBe('Loading...');
    });
  });
});
