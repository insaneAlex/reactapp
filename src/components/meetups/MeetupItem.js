import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import Card from "../../ui/Card";
import styles from "./MeetupItem.module.css";

const MeetupItem = ({ meetup }) => {
  const { id, title, image, address, description } = meetup;
  const favoritesCtx = useContext(FavoritesContext);

  const { isMeetupFavorite, handleAddFavorite, handleRemoveFavorite } =
    favoritesCtx;

  const isFavorite = isMeetupFavorite(id);

  const handleToggleFavoriteMeetup = () => {
    if (isFavorite) {
      handleRemoveFavorite(id);
    } else {
      handleAddFavorite(meetup);
    }
  };

  return (
    <li className={styles.li}>
      <Card>
        <div className={styles.meetupItem}>
          <div className={styles.imageWrapper}>
            <img className={styles.image} alt={title} src={image} />
          </div>
          <div className={styles.meetupText}>
            <h4>{title}</h4>
            <i>{address}</i>
            <p>{description}</p>
            <button
              onClick={handleToggleFavoriteMeetup}
              className={styles.button}
            >
              {isFavorite ? "Remove favorite" : "Add Favorite"}
            </button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
