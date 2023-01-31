import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import PageLayout from "../ui/PageLayout";
import convertMeetups from "../components/helpers/convert-meetups";

const AllMeetupsPage = () => {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://react-refresh-80ba4-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setMeetups(convertMeetups(data));
      });
  }, []);

  const renderContent = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else {
      return (
        <>
          <h3>Meetups Page</h3>
          <MeetupList meetups={meetups} />
        </>
      );
    }
  };

  return <PageLayout>{renderContent()}</PageLayout>;
};

export default AllMeetupsPage;
