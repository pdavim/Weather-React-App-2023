import React, { Fragment } from "react";
import { inject, observer } from "mobx-react";

import Chart from "react-apexcharts";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

import Store from "../../../../stores/Store";

const RainCharts = inject("Store")(
  observer(props => {
    const { data } = props.Store.historialWeatherData;
    //let colorText = props.props.theme.palette.secondary.white;
    let historicaldataArray = props.Store.historialWeatherData;
    let historicaldataArrayLength = props.Store.historialWeatherData.data;

    console.log("Charts p//rops ", props.Store.historialWeatherData);
    console.log("Charts props ", data);
    console.log("historical data array ", historicaldataArray);
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

    // console.log("Charts props ", props.Store.historialWeatherData);
    // console.log("rainDaysArray ", rainDaysArray);
    // console.log("minTempArray ", minTempArray);
    //console.log("yearMonthArray ", yearMonthArray);

    if (rainArray.length === 0) {
      return;
    } else {
      // console.log("Array2 rain days ", rainArray);
      let max = rainArray.reduce(function(prev, current) {
        return prev > current ? prev : current;
      });

      let maxValue = 0;
      let maxValueIndex = 0;
      let maxValueMonth = "";

      for (let i = 0; i < rainArray.length; i++) {
        if (rainArray[i] > maxValue) {
          maxValueIndex = i;
          maxValueMonth = date[i];
          maxValue = rainArray[i];
        }
      }
      // console.log(maxValue);

      Store.raindaysChartData = { maxValue, maxValueMonth };
      let rainDaysView = Store.raindaysChartData.maxValue;
      let rainDaysDateView = Store.raindaysChartData.maxValueMonth;
      rainViewData =
        "Max Rain Days " + rainDaysView + " was in " + rainDaysDateView;

      // console.log("Raindays Store ", Store.raindaysChartData);
      // console.log("array 2 ", max);
    }

    let seriedata = rainDaysArray + " " + results;

    const options = {
      xaxis: {
        categories: results
      },
      fill: {
        colors: ["#25E298"]
      },
      colors: ["#25E298"]
    };
    const series = [
      {
        name: "Raindays",
        //data: yearMonthArray
        data: rainDaysArray
      }
    ];

    return (
      <Card>
        <CardHeader title="Rain Data" subheader={rainViewData} />

        <CardContent>
          <Chart options={options} series={series} type="area" />
        </CardContent>
      </Card>
    );
  })
);

export default RainCharts;
