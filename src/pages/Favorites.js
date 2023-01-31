import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";
import PageLayout from "../ui/PageLayout";

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);
  const isEmpty = favorites.length <= 0;

  const renderContent = () => {
    if (isEmpty) {
      return <p>You dont have any favorites yet!</p>;
    } else {
      return <MeetupList meetups={favorites} />;
    }
  };

  return (
    <PageLayout>
      <h3>Favorites Page</h3>
      {renderContent()}
    </PageLayout>
  );
};

export default FavoritesPage;
