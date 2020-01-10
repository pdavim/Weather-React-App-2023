import React from "react";
import Grid from "@material-ui/core/Grid";

import "./style.scss";

import Forcastday from "./forcast";
import Charts from "./charts";

export default class BottomSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      evenYears: []
    };
  }

  render() {
    const { forecastdays, historicalData } = this.props;

    return (
      <Grid container className="bottom-container">
        <Grid item xs={12}>
          <Forcastday data={forecastdays} />
        </Grid>
        <Grid item xs={12}>
          <Charts data={historicalData} />
        </Grid>
      </Grid>
    );
  }
}
