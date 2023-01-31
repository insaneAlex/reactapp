import MeetupItem from "./MeetupItem";
import styles from "./MeetupList.module.css";

const MeetupList = ({ meetups }) => {
  return (
    <ul className={styles.ul}>
      {meetups.map((meetup) => (
        <MeetupItem meetup={meetup} key={meetup.id} />
      ))}
    </ul>
  );
};

export default MeetupList;
