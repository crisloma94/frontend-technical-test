import { Link, useLocation } from "react-router-dom";
import {
  ALL_MEETUP_PAGE,
  FAVORITES_PAGE,
  NEW_MEETUP_PAGE,
} from "../../utils/pathNames";
import classes from "./MainNavigation.module.css";

export default function MainNavigation({favorites, setFavorites}) {
  const currentPath = useLocation();
  const getLinkClass = (linkPath) => {
    return linkPath === currentPath.pathname
      ? [classes.link, classes["link--active"]].join(" ")
      : classes.link;
  };
  return (
    <header className={classes.header} data-test="navigation-header">
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
