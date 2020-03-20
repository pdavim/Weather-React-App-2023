//DEFINE DAY OF THE WEEK AND DATE FROM UNIX TIMESTAMP

var dayWeek = "";
const dayLibrays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const switchDay = x => {
  switch (x) {
    case 6:
      dayWeek = dayLibrays[x];
      // console.log(dayWeek);
      return dayWeek;

    case 5:
      dayWeek = dayLibrays[x];
      //  console.log(dayWeek);
      return dayWeek;

    case 4:
      dayWeek = dayLibrays[x];
      // console.log(dayWeek);
      return dayWeek;

    case 3:
      dayWeek = dayLibrays[x];
      // console.log(dayWeek);
      return dayWeek;

    case 2:
      dayWeek = dayLibrays[x];
      //console.log(dayWeek);
      return dayWeek;

    case 1:
      dayWeek = dayLibrays[x];
      // console.log(dayWeek);
      return dayWeek;

    case 0:
      dayWeek = dayLibrays[x];
      // console.log(dayWeek);
      return dayWeek;

    default:
      dayWeek = "Looking forward to the Weekend";
      // console.log("Looking forward to the Weekend");
      return dayWeek;
  }
};

const timeConvert = dt => {
  var dateData = new Date(dt * 1000);

  switchDay(dateData.getDay());
  //console.log("dayweek ", dayWeek);
  var date = dateData.getDate();
  var month = dateData.getMonth() + 1;
  var finalDate = date + "/" + month;
  //console.log(finalDate);
  var dateArray = [finalDate, dayWeek];
  return dateArray;
};

export default timeConvert;
