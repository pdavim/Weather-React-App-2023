//IMPORT REACT
import React from "react";

//IMPORT MATERIAL UI COMPONENTS
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

//IMPORT EXTERNAL STYLE
import "./topSection.scss";

//IMPORT EXTERNAL CUSTOM COMPONENTS
import WeatherDetails from "./weatherDetails";
import WeatherLocal from "./weatherLocal";

//IMPORT EXTERNAL CUSTOM FUNCTIONS
import windDirection from "../../functions/windDirection";
import dayOrNight from "../../functions/dayOrNight";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "10px"
    //height: "210px",
    //paddingTop: "40px",
  },
  mainContainer: {
    paddingBottom: "5px",
    paddingTop: "5px",
    paddingLeft: "15px",
    paddingRight: "7px",
    display: "flex",
    marginBottom: "5px",
    marginTop: "5px",
    marginRight: "1px",
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: 10
  },
  mainContainerLocal: {
    //  display: "flex"
    //backgroundColor: theme.palette.secondary.dark
  },
  weatherLocalGrid: {
    // display: "flex"
  }
}));

export default function Weather(props) {
  // console.log("Weather.js props ", props);
  //let { theme, store } = props;

  // console.log("Weather comp props ", props);
  //console.log(store.sunriseSunsetData.results);
  //  let dataActiveCity = props.props.activeCity.list[0];
  // let weatherDataActiveCity = props.props.activeCity.list[0];
  let weatherDataActiveCity = props.props.activeCity.list[0]; //city weather data
  let weatherDataActiveCityCity = props.props.activeCity.city.name; //city name
  //console.log("current weather ", weatherDataActiveCity);
  //console.log("city data ", weatherDataActiveCityCity);
  let datasunriseSunsetData = props.props.sunriseSunsetData.results;

  let lightOrDay = dayOrNight(weatherDataActiveCity.sys.pod);
  let windName = windDirection(weatherDataActiveCity.wind.deg);

  let iconGetUrl = `http://openweathermap.org/img/wn/${
    weatherDataActiveCity.weather[0].icon
  }@2x.png`;

  const classes = useStyles();
  return (
    <div>
      <div>
        <Grid className={classes.mainContainerLocal} container spacing={1}>
          <Grid xs="12" item className={classes.weatherLocalGrid} wrap="nowrap">
            <WeatherLocal
              props={props}
              iconURL={iconGetUrl}
              location={weatherDataActiveCityCity.name}
              temp_c={weatherDataActiveCity.main.temp}
              lightDay={lightOrDay}
              text={weatherDataActiveCity.weather[0].description}
              theme={props.theme}
              store={props}
            />
          </Grid>

          <Grid className={classes.mainContainer} container spacing={1}>
            <Grid
              item
              align="center"
              align-items-xs-center
              xs="12"
              sm="6"
              md="4"
              wrap="nowrap"
            >
              <WeatherDetails
                message="Sunrise"
                value={datasunriseSunsetData.sunrise}
                value2=" "
                url="https://cdn.iconsrepo.com/free-icon/94619/sunrise.svg"
              />
            </Grid>
            <Grid
              item
              align="center"
              align-items-xs-center
              xs="12"
              sm="6"
              md="4"
            >
              <WeatherDetails
                message="Sunset"
                value={datasunriseSunsetData.sunset}
                value2=" "
                url="https://cdn.iconsrepo.com/free-icon/98310/sunset.svg"
              />
            </Grid>
            <Grid
              item
              align="center"
              align-items-xs-center
              xs="12"
              sm="6"
              md="4"
            >
              <WeatherDetails
                className="lighHours"
                message="Light Hours"
                value={datasunriseSunsetData.day_length}
                value2=" Hr"
                url="https://cdn.iconsrepo.com/free-icon/108049/timer.svg"
              />
            </Grid>
            <Grid
              item
              align="center"
              align-items-xs-center
              xs="12"
              sm="6"
              md="4"
            >
              <WeatherDetails
                message="Civil Sunrise"
                value={datasunriseSunsetData.civil_twilight_begin}
                value2=" "
                url="https://cdn.iconsrepo.com/free-icon/19881/sunrise.svg"
              />
            </Grid>
            <Grid
              item
              align="center"
              align-items-xs-center
              xs="12"
              sm="6"
              md="4"
            >
              <WeatherDetails
                message="Civil Sunset"
                value={datasunriseSunsetData.civil_twilight_end}
                value2=" "
                url="https://cdn.iconsrepo.com/free-icon/26850/sunset.svg"
              />
            </Grid>
            <Grid
              xs="12"
              sm="6"
              md="4"
              item
              align="center"
              align-items-xs-center
            >
              <WeatherDetails
                message="Wind"
                value={weatherDataActiveCity.wind.speed}
                value2=" Km/h"
                url="https://cdn.iconsrepo.com/free-icon/3245/wind-sign.svg"
              />
            </Grid>
            <Grid
              xs="12"
              sm="6"
              md="4"
              item
              align="center"
              align-items-xs-center
            >
              <WeatherDetails
                message="Direction"
                value={windName}
                value2=""
                url="https://cdn.iconsrepo.com/free-icon/1794/navigation-compass.svg"
              />
            </Grid>
            <Grid
              xs="12"
              sm="6"
              md="4"
              item
              align="center"
              align-items-xs-center
            >
              <WeatherDetails
                message="Cloudiness"
                value={weatherDataActiveCity.clouds.all}
                value2=" %"
                url="https://cdn.iconsrepo.com/free-icon/693/clouds.svg"
              />
            </Grid>
            <Grid
              xs="12"
              sm="6"
              md="4"
              item
              align="center"
              align-items-xs-center
            >
              <WeatherDetails
                message="Humidity"
                value={weatherDataActiveCity.main.humidity}
                value2=" %"
                url="https://cdn.iconsrepo.com/free-icon/26690/humidity.svg"
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
