import React from "react";
import { observer, inject } from "mobx-react";

//material ui import
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

//import other componets

import ForecastCaroussel from "./forecastCaroussel";
import Store from "../../../stores/Store";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
    //backgroundColor: theme.palette.secondary.dark,
    //borderRadius: 7
  }
}));

const Forcastday = inject("Store")(
  observer(props => {
    //  console.log("Forcastjs props", Store);
    let data = Store.activeCity.list;
    //  console.log("Forcastjs props data ", Store);
    // const { data, moon } = this.props;
    let dataDay1;
    let dataDay2;
    let dataDay3;
    let dataDay4;
    let dateData1;
    let dateData2;
    let dateData3;
    let dateData4;
    let iconDay1;
    let iconDay2;
    let iconDay3;
    let iconDay4;
    data = Store.activeCity.list;
    let dataSize = Store.activeCity;
    if (typeof dataSize === "string" || dataSize instanceof String) {
      //  console.log("NO DATA YET");
      //  console.log("data size ", typeof dataSize);
      setTimeout(console.log("Waiting data"), 3000);
    } else {
      //  console.log("data size ", typeof dataSize);
      dataDay1 = data[8];
      dataDay2 = data[16];
      dataDay3 = data[24];
      dataDay4 = data[32];
      //GET ICONS
      iconDay1 = `http://openweathermap.org/img/wn/${
        dataDay1.weather[0].icon
      }@2x.png`;
      iconDay2 = `http://openweathermap.org/img/wn/${
        dataDay2.weather[0].icon
      }@2x.png`;
      iconDay3 = `http://openweathermap.org/img/wn/${
        dataDay3.weather[0].icon
      }@2x.png`;
      iconDay4 = `http://openweathermap.org/img/wn/${
        dataDay4.weather[0].icon
      }@2x.png`;

      //Get Date
      let date1 = new Date(dataDay1.dt * 1000);
      let date2 = new Date(dataDay2.dt * 1000);
      let date3 = new Date(dataDay3.dt * 1000);
      let date4 = new Date(dataDay4.dt * 1000);
      dateData1 = date1.getDate() + "/" + (date1.getMonth() + 1);
      dateData2 = date2.getDate() + "/" + (date2.getMonth() + 1);
      dateData3 = date3.getDate() + "/" + (date3.getMonth() + 1);
      dateData4 = date4.getDate() + "/" + (date4.getMonth() + 1);
    }
    let classes = useStyles();
    return (
      <Grid item xs="12">
        <Grid item xs="12">
          {typeof dataSize === "string" || dataSize instanceof String ? (
            <h1>Loading</h1>
          ) : (
            <ForecastCaroussel
              props={data}
              temp1={dataDay1.main.temp}
              temp2={dataDay2.main.temp}
              temp3={dataDay3.main.temp}
              temp4={dataDay4.main.temp}
              icon1={iconDay1}
              icon2={iconDay2}
              icon3={iconDay3}
              icon4={iconDay4}
              date1={dateData1}
              date2={dateData2}
              date3={dateData3}
              date4={dateData4}
              feels1={dataDay1.main.feels_like}
              feels2={dataDay2.main.feels_like}
              feels3={dataDay3.main.feels_like}
              feels4={dataDay4.main.feels_like}
              humi1={dataDay1.main.humidity}
              humi2={dataDay2.main.humidity}
              humi3={dataDay3.main.humidity}
              humi4={dataDay4.main.humidity}
              description1={dataDay1.weather[0].description}
              description2={dataDay2.weather[0].description}
              description3={dataDay3.weather[0].description}
              description4={dataDay4.weather[0].description}
              dt1={dataDay1.dt_txt}
              dt2={dataDay2.dt_txt}
              dt3={dataDay3.dt_txt}
              dt4={dataDay4.dt_txt}
              moon={Store.moonPhaseData}
            />
          )}
        </Grid>
      </Grid>
    );
  })
);

export default Forcastday;
