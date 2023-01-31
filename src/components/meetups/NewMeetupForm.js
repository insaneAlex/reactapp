import styles from "./NewMeetupForm.module.css";
import { useRef } from "react";

const NewMeetupForm = ({ onAddNewMeetup }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      address: enteredAddress,
      image: enteredImage,
      description: enteredDescription,
    };

    onAddNewMeetup(meetupData);
  };

  const handleButtonClick = () => {
    console.log(titleInputRef.current.value);
  };
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef}></input>
        </div>

        <div className={styles.control}>
          <label htmlFor="address">Meetup Addres</label>
          <input
            type="text"
            required
            id="address"
            ref={addressInputRef}
          ></input>
        </div>

        <div className={styles.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef}></input>
        </div>

        <div className={styles.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            type="text"
            required
            rows="5"
            id="description"
            ref={descriptionInputRef}
          ></textarea>
        </div>

        <div className={styles.actions}>
          <button onClick={handleButtonClick}>Add Meetup</button>
        </div>
      </form>
    </>
  );
};

export default NewMeetupForm;
