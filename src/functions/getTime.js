//GET HOUR & DATE FROM USER BROWSER
const getTime = () => {
  let date = new Date().getDate(); //Current Date
  let month = new Date().getMonth() + 1; //Current Month
  let year = new Date().getFullYear(); //Current Year
  let hours = new Date().getHours(); //Current Hours
  let min = new Date().getMinutes(); //Current Minutes
  let sec = new Date().getSeconds(); //Current Seconds
  let dates = date + "/" + month + "/" + year; //Create date human readable
  let hour = hours + ":" + min + ":" + sec; //Create hour human readable
  return [dates, hour, date, month, year, hours, min, sec];
};

export default getTime;
