import { shallow } from 'enzyme';
import App from './App';
import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';

/**
 * Factory funcion to create a ShallowWrapper for the App component
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

describe('<App /> rendering', () => {
  test('renders App without crashing', () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
  });

  test('renders the navigation component', () => {
    const wrapper = setup();
    expect(wrapper.find(MainNavigation).length).toBe(1);
  });

  test('renders the Layout component', () => {
    const wrapper = setup();
    expect(wrapper.find(Layout).length).toBe(1);
  });
});
