import { shallow } from 'enzyme';
import MeetupItem from './MeetupItem';
import data from './../../../public/data.json';

const setFavoritesMock = jest.fn();
function createTestProps(favorites = []) {
  return {
    item: data[0],
    favorites: favorites,
    setFavorites: setFavoritesMock,
  };
}
let wrapper, props;

describe('<MeetupItem /> rendering', () => {
  describe('<MeetupItem /> basic rendering', () => {
    beforeEach(() => {
      props = createTestProps();
      wrapper = shallow(<MeetupItem {...props} />);
    });
    it('Should render without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });
    it('Should render an image, a title, an address and some text', () => {
      expect(wrapper.find('img')).toHaveLength(1);
      expect(wrapper.find('h3')).toHaveLength(1);
      expect(wrapper.find('address')).toHaveLength(1);
      expect(wrapper.find('p')).toHaveLength(1);
    });
  });

  describe('<MeetupItem /> when is a favorite', () => {
    it('Should have a button to remove from favorites', () => {
      props = createTestProps(data);
      wrapper = shallow(<MeetupItem {...props} />);
      expect(wrapper.find('button')).toHaveLength(1);
      expect(wrapper.find('button').text()).toBe('Remove from favorites');
    });
  });

  describe('<MeetupItem /> when is not a favorite', () => {
    it('Should have a button to add to favorites', () => {
      props = createTestProps();
      wrapper = shallow(<MeetupItem {...props} />);
      expect(wrapper.find('button')).toHaveLength(1);
      expect(wrapper.find('button').text()).toBe('Add to favorites');
    });
  });
});

describe('<MeetupItem /> interactions', () => {
  describe('<MeetupItem /> when is a favorite', () => {
    it('Should call setFavorites when clicked on "Remove from favorites" button', () => {
      props = createTestProps(data);
      wrapper = shallow(<MeetupItem {...props} />);
      wrapper.find('button').simulate('click');
      expect(setFavoritesMock.mock.calls.length).toEqual(1);
    });
  });

  describe('<MeetupItem /> when is not a favorite', () => {
    it('Should call setFavorites when clicked on "Add to favorites" button', () => {
      props = createTestProps();
      wrapper = shallow(<MeetupItem {...props} />);
      wrapper.find('button').simulate('click');
      expect(setFavoritesMock.mock.calls.length).toEqual(1);
    });
  });
});
