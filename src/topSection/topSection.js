import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";

import Weather from "./weather";

import "./topSection.scss";

class TopSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelectLocationOpen: false
    };
  }

  render() {
    return (
      <Grid container className="top-section">
        <Grid item xs={12}>
          <Weather {...this.props} />
        </Grid>
      </Grid>
    );
  }
}
export default TopSection;
