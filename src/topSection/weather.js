//IMPORT REACT
import React from "react";

//IMPORT MATERIAL UI COMPONENTS

//IMPORT EXTERNAL STYLE
import "./topSection.scss";

//IMPORT EXTERNAL CUSTOM COMPONENTS
import WeatherDetails from "./weatherDetails";
import WeatherLocal from "./weatherLocal";

export default function Weather(props) {
  let {
    location,
    temp_c,
    lightDay,
    text,
    iconURL,
    windSpeed,
    windDir,
    precepitmm,
    humidity,
    sunrise,
    sunset
  } = props;

  if (props.is_day === 1) {
    //   console.log("is day");
    lightDay = "Day";
  } else {
    //  console.log("is night");
    lightDay = "Night";
  }

  return (
    <div className="weather-Container">
      <WeatherLocal
        iconURL={iconURL}
        location={location}
        temp_c={temp_c}
        lightDay={lightDay}
        text={text}
        sunrise={sunrise}
        sunset={sunset}
      />

      <WeatherDetails message="Wind" value={windSpeed} value2="Km/h" />
      <WeatherDetails message="Direction" value={windDir} value2="º" />
      <WeatherDetails message="Cloudiness" value={precepitmm} value2="%" />
      <WeatherDetails message="Humidity" value={humidity} value2="%" />
    </div>
  );
}
