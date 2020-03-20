import React, { Fragment } from "react";
import { inject, observer } from "mobx-react";

import Chart from "react-apexcharts";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

import Store from "../../../../stores/Store";

const PrecipitationChart = inject("Store")(
  observer(props => {
    const { data } = props.Store.historialWeatherData;
    //let colorText = props.props.theme.palette.secondary.white;
    let historicaldataArray = props.Store.historialWeatherData;
    let historicaldataArrayLength = props.Store.historialWeatherData.data;

    //console.log("Charts p//rops ", props.Store.historialWeatherData);
    //console.log("Charts props ", data);
    //console.log("historical data array ", historicaldataArray);
    let historicalData = historicaldataArray.data;
    let historicalDataLength = historicalData.length;
    let rainDaysArray = [];
    //let minTempArray = [];
    let yearMonthArray = [];
    let date = [];
    let rainArray = [];
    let rainViewData = "";
    let precipitationArray = [];

    for (let i = 0; i < historicalDataLength; i++) {
      if (
        historicaldataArray.data[i].temperature_max !== null &&
        historicaldataArray.data[i].temperature_min !== null
      ) {
        rainDaysArray.push(historicaldataArray.data[i].raindays);
        rainArray.push(historicaldataArray.data[i].raindays);
        precipitationArray.push(historicaldataArray.data[i].precipitation);
        //minTempArray.push(historicaldataArray.data[i].temperature_min);
        let yearMonth = historicaldataArray.data[i].month;
        date.push(yearMonth);
        let year = yearMonth[0] + yearMonth[1] + yearMonth[2] + yearMonth[3];
        yearMonthArray.push(year);
      }
    }

    let results = [];
    for (let i = 0; i < yearMonthArray.length; i++) {
      if (yearMonthArray[i] !== yearMonthArray[i - 1]) {
        results.push(yearMonthArray[i]);
      } else {
        results.push(".");
      }
    }

    //console.log("Charts props ", props.Store.historialWeatherData);
    //console.log("rainDaysArray ", rainDaysArray);
    // console.log("minTempArray ", minTempArray);
    //console.log("yearMonthArray ", yearMonthArray);

    //var sorted_arr = yearMonthArray.sort(); // You can define the comparing function here.
    // JS by default uses a crappy string compare.

    //console.log("results ", results);

    // let historicaldataArrayLength = props.Store.historial;

    // console.log("historl data array ", historicaldataArray);

    //console.log("Array rain days ", rainArray);
    //  for(let i = 0;  i<)
    //let array2 = [];

    if (precipitationArray.length === 0) {
      return;
    } else {
      // console.log("Array2 rain days ", rainArray);
      let max = precipitationArray.reduce(function(prev, current) {
        return prev > current ? prev : current;
      });

      let maxValue = 0;
      let maxValueIndex = 0;
      let maxValueMonth = "";

      for (let i = 0; i < precipitationArray.length; i++) {
        if (precipitationArray[i] > maxValue) {
          maxValueIndex = i;
          maxValueMonth = date[i];
          maxValue = precipitationArray[i];
        }
      }
      // console.log(maxValue);

      Store.precipitationChartData = { maxValue, maxValueMonth };
      let maxView = Store.precipitationChartData.maxValue;
      let dateView = Store.precipitationChartData.maxValueMonth;
      rainViewData =
        "Max Perecipitation was " + maxView + " was in " + dateView;

      //console.log("Raindays Store ", Store.raindaysChartData);
      //console.log("array 2 ", max);
    }

    PrecipitationChart;
    const options = {
      xaxis: {
        categories: results
      },

      colors: ["#F44336", "#E91E63", "#9C27B0"]
    };
    const series = [{ name: "Precipitation", data: precipitationArray }];

    return (
      <Card>
        <CardHeader title="Precipitation" subheader={rainViewData} />

        <CardContent>
          <Chart options={options} series={series} type="area" />
        </CardContent>
      </Card>
    );
  })
);

export default PrecipitationChart;
