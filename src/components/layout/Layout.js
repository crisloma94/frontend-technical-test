import classes from './Layout.module.css';

export default function Layout({ children }) {
  return <main className={classes.main}>{children}</main>;
}
