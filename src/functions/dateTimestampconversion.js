//FUNCTION FOR CONVERTING UNIX TIMESTAMP INTO DATE
const dateTimestampconversion = timeStamp => {
  //Create new date
  let date = new Date(timeStamp * 1000);
  // Hours part from the timestamp
  let hours = date.getHours();
  // Minutes part from the timestamp
  let minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  let seconds = "0" + date.getSeconds();
  // Will display time in 10:30:23 format
  let timeStampFormattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  return timeStampFormattedTime;
};

export default dateTimestampconversion;
