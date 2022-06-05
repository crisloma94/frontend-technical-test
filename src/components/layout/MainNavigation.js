import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ALL_MEETUP_PAGE,
  FAVORITES_PAGE,
  NEW_MEETUP_PAGE,
} from '../../utils/pathNames';
import { useDebounce } from './../../util-hooks/useDebounce';
import classes from './MainNavigation.module.css';

export default function MainNavigation({ favorites }) {
  const currentPath = useLocation();
  const [visible, setVisible] = useState(true);
  const [currentScrollPos, setCurrentScrollPos] = useState(window.pageYOffset);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const debouncedCurrentScrollPos = useDebounce(currentScrollPos, 30);

  useEffect(() => {
    const handleScroll = () => {
      setCurrentScrollPos((prevPosition) => {
        setPrevScrollPos(prevPosition);
        return window.pageYOffset;
      });
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [debouncedCurrentScrollPos]);

  useEffect(() => {
    const newVisibleValue = prevScrollPos < currentScrollPos ? false : true;
    if (newVisibleValue !== visible) {
      setVisible(newVisibleValue);
    }
  }, [debouncedCurrentScrollPos]);

  const getLinkClass = (linkPath) => {
    return linkPath === currentPath.pathname
      ? [classes.link, classes['link--active']].join(' ')
      : classes.link;
  };
  return (
    <header
      className={
        visible
          ? classes.header
          : [classes.header, classes['header--hidden']].join(' ')
      }
      data-test="navigation-header"
    >
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link
              to={ALL_MEETUP_PAGE}
              className={getLinkClass(ALL_MEETUP_PAGE)}
            >
              All Meetups
            </Link>
          </li>
          <li>
            <Link
              to={NEW_MEETUP_PAGE}
              className={getLinkClass(NEW_MEETUP_PAGE)}
            >
              Add New Meetup
            </Link>
          </li>
          <li>
            <Link to={FAVORITES_PAGE} className={getLinkClass(FAVORITES_PAGE)}>
              My Favorites
            </Link>
            <span className={classes.badge}>{favorites.length}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
