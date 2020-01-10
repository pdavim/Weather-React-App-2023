//IMPORT REACT AND OTHER LIBRARIES
import React, { Component } from "react";
import axios from "axios";

//IMPORT MATERIA UI COMPONENTS

import Grid from "@material-ui/core/Grid";

//IMPORT EXTERNAL STYLESHEETS
import "./App.css";
import "./sass/app.scss";

//IMPORT CUSTOM COMPONENTS
import TopSection from "./topSection/topSection";
import BottomSection from "./bottomSection/bottomSection";
import Header from "./components/Header";

const METEOSTAT_KEY = "0vg3cvxo";
const openWeatherKey = "ad514d92e87731d870898504c120e3ac";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "Lisboa",
      numForcastDays: 6,
      stationIdWeather: 8535,
      isLoading: true,
      date: "",
      historicalData: [],
      lat: "",
      lon: ""
    };
  }

  updateWeather() {
    const { cityName } = this.state;
    //GET WEATHER APP FROM API OPENWEATHER
    const getWD = async () => {
      const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${openWeatherKey}`;
      axios.get(URL).then(responseW => {
        console.log(" My Response is ", responseW);

        let data = responseW.data;

        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(data.city.sunrise * 1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();

        // Will display time in 10:30:23 format
        var formattedTime =
          hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
        //console.log("formattedTime", formattedTime);

        var datesunset = new Date(data.city.sunset * 1000);
        // Hours part from the timestamp
        var hourssunset = datesunset.getHours();
        // Minutes part from the timestamp
        var minutessunset = "0" + datesunset.getMinutes();
        // Seconds part from the timestamp
        var secondssunset = "0" + datesunset.getSeconds();

        // Will display time in 10:30:23 format
        var formattedTimesunset =
          hourssunset +
          ":" +
          minutessunset.substr(-2) +
          ":" +
          secondssunset.substr(-2);
        //  console.log("My Data WD ", data);
        this.setState({
          isLoading: false,
          temp_c: data.list[0].main.temp,
          is_day: data.list[0].is_day,
          text: data.list[0].weather[0].description,
          iconURL: data.list[0].weather[0].icon,
          forecastdays: data.list,
          windSpeed: data.list[0].wind.speed,
          windDir: data.list[0].wind.deg,
          windDirDegrees: data.list[0].wind.deg,
          precepitmm: data.list[0].clouds.all,
          humidity: data.list[0].main.humidity,
          cityTimeZone: data.city.timezone,
          sunrise: formattedTime,
          sunset: formattedTimesunset,
          lat: data.city.coord.lat,
          lon: data.city.coord.lon
          /* astroSunrise: data.forecast.forecastday[0].astro.sunrise,
          astroSunset: data.forecast.forecastday[0].astro.sunset,
          astroMoonRise: data.forecast.forecastday[0].astro.moonrise,
          astroMoonSet: data.forecast.forecastday[0].astro.moonset,
          localTime: data.location.localtime */
        });
      });
    };

    //GET WEATHER STATION ID FROM CITY LOCATION
    const getStation = async () => {
      const stationURL = `https://api.meteostat.net/v1/stations/search?q=${
        this.state.cityName
      }&key=${METEOSTAT_KEY}`;
      await axios.get(stationURL).then(staionRes => {
        // Create an array with the station
        let j = 0;
        var arrayPushData = [];
        var stationDataRes = staionRes.data.data;
        for (j; j < staionRes.length; j++) {
          arrayPushData.push(stationDataRes[j]);
        }

        var arrayAlt = stationDataRes;
        // console.log("array  ", arrayAlt);
        let l = 0;

        for (l; l < arrayAlt.length; l++) {
          let arrayAltId = arrayAlt[l];
          let stationId = arrayAltId.id;
          const historicalURL2 = `https://api.meteostat.net/v1/history/monthly?station=${stationId}&start=1998-01&end=2018-12-11&time_zone=${
            this.state.cityTimeZone
          }&time_format=Y-m-d%20H:i&key=${METEOSTAT_KEY}`;
          let index = arrayAlt[l];
          axios.get(historicalURL2).then(r => {
            let h = r.data.data;
            if (h.length !== 0) {
              //console.log("index ", index.id);
              this.setState({
                indexA: index.id,
                stationState: index.id
              });
            }
            let g = this.state.indexA;
            this.setState({
              gA: g
            });
          });
        }

        var id1 = staionRes.data.data[0];
        var id2 = staionRes.data.data[1];
        var id3 = staionRes.data.data[2];
        var id4 = staionRes.data.data[3];
        var array = [id1.id, id2.id, id3.id, id4.id];
        if (
          array[0] === "08536" ||
          array[1] === "08579" ||
          array[2] === "66318"
        ) {
          this.setState({
            stationWeatherArray: array,
            stationIdWeather: "08535"
          });
        } else {
          this.setState({
            stationIdWeather: array[0],
            stationWeatherArray: array
          });
        }
      });
    };

    // GET SUNRISE AND SUNSET HOUR FROM API - ITS NOT IMPLEMNTEND FOR THE USER

    // console.log("cityTimeZonesunset", this.state);
    //const latitude = data.city.lat;
    //const longitude = this.state.lon;
    console.log(this.state.lat);
    console.log(this.state.lon);

    const getSunRiseSunset = async () => {
      //  const URLsunsetSunrise = `https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400`;
      const URLsunsetSunrise = `https://api.sunrise-sunset.org/json?lat=${
        this.state.lat
      }&lng=${this.state.lon}`;
      await axios.get(URLsunsetSunrise).then(res => {
        console.log("sunrise is ", res.data.results);
        this.setState({
          sunriseSunset: res.data.results
        });
      });
      console.log(" sunrise api ", this.state.sunriseSunset.sunrise);
      console.log(" sunset api ", this.state.sunriseSunset.sunset);
    };

    //GET HISTORICAL DATA FROM API
    const getHD = async () => {
      await getWD();
      await getSunRiseSunset();
      await getStation();
      const { cityTimeZone, stationWeatherArray } = this.state;
      const { stationIdWeather } = this.state;
      let station = stationIdWeather;
      let timezone = cityTimeZone;

      // CREATE AN ARRAY WITH THE DATA OBJECTS OF OUR STATIONS
      let i = 0;

      let arrayPush = [];

      for (i = 0; i < stationWeatherArray.length; i++) {
        const historicalURL = `https://api.meteostat.net/v1/history/monthly?station=${
          stationWeatherArray[i]
        }&start=1998-01&end=2018-12-11&time_zone=${timezone}&time_format=Y-m-d%20H:i&key=${METEOSTAT_KEY}
      `;
        await axios.get(historicalURL).then(resposta => {
          // console.log("resposta é ", resposta.data.data);
          let respostaDta = resposta.data.data;
          arrayPush.push(respostaDta);
        });
      }

      // CHECK WICH OBJECTS OF ARRAY ARE EMPTY
      // let k = 0;
      /*  let arrayId = 0;
      for (k === 0; k < arrayPush.length; k++) {
        if (arrayPush[k].length === 0) {
          //         console.log("array select empty ", k);
        } else {
          //        console.log("array select ", arrayPush[k]);
          arrayId = k;
          this.setState({
            station: arrayPush[k]
          });
        }
      }*/

      // GET HISTORICAL DATA FROM API
      const historicalURL = `https://api.meteostat.net/v1/history/monthly?station=${station}&start=1998-01&end=2018-12-11&time_zone=${
        this.state.cityTimeZone
      }&time_format=Y-m-d%20H:i&key=${METEOSTAT_KEY}
      `;
      //  console.log("Historical URL ", historicalURL);

      await axios.get(historicalURL).then(res => {
        let historicalFectData = res.data.data;
        //   console.log("historical fetch data ", historicalFectData);
        this.setState({
          historicalData: historicalFectData
        });
      });
    };

    getHD();
  }

  componentDidMount() {
    // Accepts a Date object or date string that is recognized by the Date.parse() method
    const { eventEmitter } = this.props;

    this.updateWeather();

    eventEmitter.on("updateWeather", Mydata => {
      // console.log("Mydata ", Mydata);
      this.setState({ cityName: Mydata }, () => this.updateWeather());
    });
  }

  render() {
    const {
      isLoading,
      cityName,
      temp_c,
      is_day,
      text,
      iconURL,
      forecastdays,
      windSpeed,
      windDir,
      precepitmm,
      humidity,
      /*windDirDegrees,
      astroSunrise,
      astroSunset,
      astroMoonRise,
      astroMoonSet,
      localTime,*/
      cityTimeZone,
      historicalData,
      sunrise,
      sunset
    } = this.state;
    let iconGetUrl = `http://openweathermap.org/img/wn/${iconURL}@2x.png`;

    return (
      <div className="app-container classes.root">
        <Grid className="main-container" conatiner>
          <Grid className="headerSection" item xs={12}>
            {isLoading && <h3>Loading Data...</h3>}
            {!isLoading && (
              <Header
                forecastdays={forecastdays}
                cityTimeZone={cityTimeZone}
                is_day={is_day}
                historicalData={historicalData}
                eventEmitter={this.props.eventEmitter}
              />
            )}
          </Grid>
          {isLoading && <h3>Loading Weather...</h3>}
          {!isLoading && (
            <Grid className="topSection" item xs={12}>
              <TopSection
                location={cityName}
                temp_c={temp_c}
                is_day={is_day}
                text={text}
                iconURL={iconGetUrl}
                windSpeed={windSpeed}
                windDir={windDir}
                cityTimeZone={cityTimeZone}
                precepitmm={precepitmm}
                humidity={humidity}
                sunrise={sunrise}
                sunset={sunset}
                /* astroSunrise={astroSunrise}
                astroSunset={astroSunset}
                astroMoonRise={astroMoonRise}
                astroMoonSet={astroMoonSet}
                windDirDegrees={windDirDegrees}
                localTime={localTime}*/
                eventEmitter={this.props.eventEmitter}
              />
            </Grid>
          )}
          <Grid className="bottomSection" item xs={12}>
            {isLoading && <h3>Loading Data...</h3>}
            {!isLoading && (
              <BottomSection
                forecastdays={forecastdays}
                cityTimeZone={cityTimeZone}
                is_day={is_day}
                historicalData={historicalData}
              />
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
