import React from "react";
import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLegend
} from "victory";
import Grid from "@material-ui/core/Grid";

import "./style.scss";

export default class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      evenYears: []
    };
  }

  render() {
    const { data } = this.props;
    //console.log("Charts props ",this.props.data);

    return (
      <div className="bottom-container">
        <div>
          <Grid container spacing={4}>
            <Grid item>
              <VictoryChart
                // adding the material theme provided with Victory
                theme={VictoryTheme.material}
                domainPadding={{ x: 20, y: 20 }}
              >
                <VictoryAxis
                  tickValues={[1998, 2013]}
                  tickFormat={[]}
                  label="temperature by month from 1998 / 2019"
                  style={{
                    grid: { stroke: 0 },
                    axisLabel: { padding: 40 }
                  }}
                />
                <VictoryAxis
                  dependentAxis
                  tickValues={[0, 5, 10, 15, 20, 25, 30, 35, 40]}
                  tickFormat={x => `${x / 1}ºC`}
                  style={{
                    grid: { stroke: 0 },
                    axisLabel: { padding: 10 }
                  }}
                />
                <VictoryLine
                  data={data}
                  // data accessor for x values
                  x="month"
                  // data accessor for y values
                  y="temperature_max"
                  style={{
                    data: {
                      stroke: "#c43a31",
                      fillOpacity: 0.7,
                      strokeWidth: 1
                    }
                  }}
                />
                <VictoryLine
                  data={data}
                  // data accessor for x values
                  x="month"
                  // data accessor for y values
                  y="temperature_min"
                  style={{
                    data: {
                      stroke: "#4973FA",
                      fillOpacity: 0.7,
                      strokeWidth: 1
                    }
                  }}
                />
                <VictoryLegend
                  x={30}
                  y={310}
                  orientation="horizontal"
                  gutter={20}
                  style={{
                    border: { stroke: "black", data: { fontSize: 11 } }
                  }}
                  colorScale={["#c43a31", "#4973FA"]}
                  data={[{ name: "Max Temp" }, { name: "Min Temp" }]}
                />
              </VictoryChart>
            </Grid>
            <Grid item>
              <VictoryChart
                // adding the material theme provided with Victory
                theme={VictoryTheme.material}
                domainPadding={{ x: 20, y: 20 }}
              >
                <VictoryAxis
                  tickValues={[1998, 2013]}
                  tickFormat={[]}
                  label="Rain Days by month from 1998 / 2019"
                  style={{
                    grid: { stroke: 0 },
                    axisLabel: { padding: 40 }
                  }}
                />
                <VictoryAxis
                  dependentAxis
                  tickValues={[0, 5, 10, 15]}
                  tickFormat={x => `${x / 1}Days`}
                  style={{
                    grid: { stroke: 0 },
                    axisLabel: { padding: 10 }
                  }}
                />
                <VictoryLine
                  data={data}
                  // data accessor for x values
                  x="month"
                  // data accessor for y values
                  y="raindays"
                  style={{
                    data: {
                      stroke: "#c43a31",
                      fillOpacity: 0.7,
                      strokeWidth: 1
                    }
                  }}
                />

                <VictoryLegend
                  x={30}
                  y={310}
                  orientation="horizontal"
                  gutter={20}
                  style={{
                    border: { stroke: "black", data: { fontSize: 11 } }
                  }}
                  colorScale={["#c43a31", "#4973FA"]}
                  data={[{ name: "Rain Days" }, { name: "Sunshine Days" }]}
                />
              </VictoryChart>
            </Grid>
            <Grid item>
              <VictoryChart
                // adding the material theme provided with Victory
                theme={VictoryTheme.material}
                domainPadding={{ x: 20, y: 20 }}
              >
                <VictoryAxis
                  tickValues={[
                    1998,
                    1999,
                    2000,
                    2001,
                    2002,
                    2003,
                    2004,
                    2005,
                    2006,
                    2007,
                    2008,
                    2009,
                    2010,
                    2011,
                    2012,
                    2013
                  ]}
                  tickFormat={[]}
                  label="Rain Days by month from 1998 / 2019"
                  style={{
                    grid: { stroke: 0 },
                    axisLabel: { padding: 40 }
                  }}
                />
                <VictoryAxis
                  dependentAxis
                  tickValues={[0, 10, 20, 40, 60, 100, 150, 200, 300, 356]}
                  tickFormat={x => `${x / 1}`}
                  style={{
                    grid: { stroke: 0 },
                    axisLabel: { padding: 10 }
                  }}
                />
                <VictoryLine
                  data={data}
                  // data accessor for x values
                  x="month"
                  // data accessor for y values
                  y="sunshine"
                  style={{
                    data: {
                      stroke: "#c43a31",
                      fillOpacity: 0.7,
                      strokeWidth: 1
                    }
                  }}
                />

                <VictoryLegend
                  x={30}
                  y={310}
                  orientation="horizontal"
                  gutter={20}
                  style={{
                    border: { stroke: "black", data: { fontSize: 11 } }
                  }}
                  colorScale={["#c43a31", "#4973FA"]}
                  data={[{ name: "Sunshine Days" }]}
                />
              </VictoryChart>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
