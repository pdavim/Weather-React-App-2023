const currentDay = () => {
  const currentDate = new Date();
  const mounthDate = currentDate.getMonth() + 1;
  const dayDate = currentDate.getDate();
  const yearDate = currentDate.getFullYear();
  const hourCurrentCity = currentDate.getHours();
  const minuteCurrentCity = currentDate.getMinutes();
  const dayTime = currentDate.getTime();
  let currentDayData = dayDate + "/" + mounthDate + "/" + yearDate;
  let currentHourData = hourCurrentCity + ":" + minuteCurrentCity;
  let currentDay = [currentDayData, currentHourData, dayTime];
  return currentDay;
};

export default currentDay;
