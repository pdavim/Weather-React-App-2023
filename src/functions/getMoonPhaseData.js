let phases = [
  "new moon",
  "waxing crescent moon",
  "quarter moon",
  "waxing gibbous moon",
  "full moon",
  "waning gibbous moon",
  "last quarter moon",
  "waning crescent moon"
];

const getMoonPhaseData = async timestamp => {
  let c = 0;
  let e = 0;
  let jd = 0;
  let b = 0;
  let x = await timestamp;
  let date = new Date(x * 1000);
  // Will display time in 10:30:23 format
  let month = date.getMonth();
  let year = date.getFullYear();
  let day = date.getDate();
  if (month < 3) {
    year--;
    month += 12;
  }
  month++;
  c = 365.25 * year;
  e = 30.6 * month;
  jd = c + e + day - 694039.09; // jd is total days elapsed
  jd /= 29.5305882; // divide by the moon cycle
  b = parseInt(jd); // int(jd) -> b, take integer part of jd
  jd -= b; // subtract integer part to leave fractional part of original jd
  b = Math.round(jd * 8); // scale fraction from 0-8 and round
  let moonArray = [];
  switch (b) {
    case 0:
      moonArray = [phases[0], 0];

      console.log(moonArray);

      return moonArray;

    case 1:
      moonArray = [phases[1], 0.13];

      console.log(moonArray);

      return [phases[1], 0.13];

    case 2:
      moonArray = [phases[2], 0.26];
      console.log(moonArray);

      return moonArray;

    case 3:
      moonArray = [phases[3], 0.39];
      console.log(moonArray);
      return moonArray;

    case 4:
      moonArray = [phases[4], 0.49];

      console.log(moonArray);

      return moonArray;

    case 5:
      moonArray = [phases[3], 0.39];

      console.log(moonArray);

      return moonArray;

    case 6:
      moonArray = [phases[6], "0.6"];
      console.log(moonArray);
      return moonArray;

    case 7:
      moonArray = [phases[7], "0.81"];
      console.log(moonArray);

      return moonArray;
    default:
      //  console.log("waiting for light");
      return "waiting for moon data";
  }
};

export default getMoonPhaseData;
