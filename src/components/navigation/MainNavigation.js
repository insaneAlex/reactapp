import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  const { favoritesAmount } = useContext(FavoritesContext);
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link className={styles.link} to="/">
              All Meetups
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.link} to="/new-meetup">
              Add meetup
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.link} to="/favorites">
              {`Favorites (${favoritesAmount})`}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MainNavigation;
