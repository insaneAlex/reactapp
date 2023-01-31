import NewMeetupForm from "../components/meetups/NewMeetupForm";
import PageLayout from "../ui/PageLayout";
import { useNavigate } from "react-router-dom";

const NewMeetupPage = () => {
  const navigate = useNavigate();
  const handleAddMeetup = (meetupData) => {
    fetch(
      "https://react-refresh-80ba4-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => {
      navigate("/");
    });
  };
  return (
    <PageLayout>
      <h3>New Meetup Page</h3>
      <NewMeetupForm onAddNewMeetup={handleAddMeetup} />
    </PageLayout>
  );
};

export default NewMeetupPage;
