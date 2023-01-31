import { Route, Routes, Link } from "react-router-dom";
import MainNavigation from "./components/navigation/MainNavigation";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

import styles from "./App.module.css";

const App = () => (
  <>
    <header className={styles.header}>
      <h2>
        <Link className={styles.link} to="/">
          React Meetups
        </Link>
      </h2>
      <MainNavigation />
    </header>

    <Routes>
      <Route path="/" element={<AllMeetupsPage />} />
      <Route path="/new-meetup" element={<NewMeetupPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  </>
);

export default App;
