import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  favoritesAmount: 0,
});

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const handleAddFavorite = (meetup) => {
    setFavorites((prevFavorites) => {
      return prevFavorites.concat(meetup);
    });
  };

  const handleRemoveFavorite = (meetupId) => {
    setFavorites((prevFavorites) => {
      return prevFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  };
  const isMeetupFavorite = (meetupId) => {
    return favorites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites,
    favoritesAmount: favorites.length,
    handleAddFavorite,
    handleRemoveFavorite,
    isMeetupFavorite,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
