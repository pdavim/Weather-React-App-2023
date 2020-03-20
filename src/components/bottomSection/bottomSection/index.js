import React from "react";
import { observer, inject } from "mobx-react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Forcastday from "../forcastSection/forcast";
import Charts from "../chartsSection/charts";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: 7,
    marginTop: 4
  }
}));

const BottomSection = inject("Store")(
  observer(props => {
    const { historicalData, getWeatherData } = props;
    // console.log("bottom section ", props);
    const classes = useStyles();
    return (
      <Grid container className={classes.root} spacing={1}>
        <Grid item xs={12}>
          <Forcastday props={props} />
        </Grid>
        <Grid item xs={12}>
          <Charts
            data={historicalData}
            props={props}
            getWeatherData={getWeatherData}
          />
        </Grid>
      </Grid>
    );
  })
);

export default BottomSection;
