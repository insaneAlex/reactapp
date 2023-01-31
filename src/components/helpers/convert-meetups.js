const convertMeetups = (data) =>
  Object.keys(data).reverse().map((key) => {
    const obj = data[key];
    return { ...obj, id: key };
  });

export default convertMeetups;
