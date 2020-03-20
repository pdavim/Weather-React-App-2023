import React, { Fragment } from "react";
import { inject, observer } from "mobx-react";

import Chart from "react-apexcharts";

import Store from "../../../../stores/Store";

const AreaCharts = inject("Store")(
  observer(props => {
    const { data } = props.Store.historialWeatherData;
    //let colorText = props.props.theme.palette.secondary.white;
    let historicaldataArray = props.Store.historialWeatherData;
    let historicaldataArrayLength = props.Store.historialWeatherData.data;

    /*  console.log("Charts p//rops ", props.Store.historialWeatherData);
    console.log("Charts props ", data);
    console.log("historical data array ", historicaldataArray); */
    let historicalData = historicaldataArray.data;
    let historicalDataLength = historicalData.length;
    let maxTempArray = [];
    let minTempArray = [];
    let yearMonthArray = [];
    let year = [];

    for (let i = 0; i < historicalDataLength; i++) {
      if (
        historicaldataArray.data[i].temperature_max !== null &&
        historicaldataArray.data[i].temperature_min !== null
      ) {
        maxTempArray.push(historicaldataArray.data[i].temperature_max);
        minTempArray.push(historicaldataArray.data[i].temperature_min);
        let yearMonth = historicaldataArray.data[i].month;
        let year = yearMonth[0] + yearMonth[1] + yearMonth[2] + yearMonth[3];
        yearMonthArray.push(year);
      }
    }

    /* console.log("Charts props ", props.Store.historialWeatherData);
    console.log("maxTempArray ", maxTempArray);
    console.log("minTempArray ", minTempArray);
    console.log("yearMonthArray ", yearMonthArray);
*/
    var sorted_arr = yearMonthArray.sort(); // You can define the comparing function here.
    // JS by default uses a crappy string compare.
    let results = [];
    for (var i = 0; i < yearMonthArray.length; i++) {
      if (yearMonthArray[i] !== yearMonthArray[i - 1]) {
        results.push(yearMonthArray[i]);
      } else {
        results.push(".");
      }
    }

    // console.log("results ", results);

    // let historicaldataArrayLength = props.Store.historial;

    //  console.log("historl data array ", historicaldataArray);
    let array = [];

    for (let i = 0; i < historicaldataArrayLength.length; i++) {
      // console.log(historicaldataArray.data[i].temperature_max);
      array.push([
        historicaldataArray.data[i].temperature_max,
        historicaldataArray.data[i].month
      ]);
      //console.log("----------");
      // console.log("array temMax ", array);
      // console.log("----------");
    }

    //  for(let i = 0;  i<)

    if (!array) {
      return;
    } else {
      for (let i = 0; i < historicaldataArray.length; i++) {
        array.push(historicaldataArray.data[i].temperature_max);
      }
      let max = array.reduce(function(prev, current) {
        return prev > current ? prev : current;
      });

      Store.maxTempDataChart = max;

      // console.log("maxTemp Store ", Store.maxTempDataChart);
      //  console.log("array 2 ", max);
    }
    //  console.log("Array Max Temp ", array);

    AreaCharts;
    const options = {
      xaxis: {
        name: "Year",
        categories: results
      }
    };
    const series = [
      {
        name: "Max Temperatures",
        data: maxTempArray
      },
      {
        name: "Min Temperatures",
        data: minTempArray
      }
    ];

    return (
      <Fragment>
        <Chart options={options} series={series} type="area" />
      </Fragment>
    );
  })
);

export default AreaCharts;
