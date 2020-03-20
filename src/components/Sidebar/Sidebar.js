import React from "react";
import { observer, inject } from "mobx-react";

//Material UI
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ListOfCities from "./ListOfCities";
//import Maps from "../Maps";
import Maps2 from "../Maps2";

const useStyles = makeStyles(theme => ({
  root: {
    //paddingTop: 20,
    //flexGrow: 1,
    marginLeft: 0,
    //maxWidth: "350px",
    borderRadius: 7,
    backgroundColor: theme.palette.secondary.dark
    // height: "100%"
  },
  listOfCities: {
    display: "flex",
    paddingBottom: 20,
    paddingLeft: 5,
    paddingRight: 0
  },
  maps: {
    alignContent: "center",
    alignItems: "center"
  }
}));

const Sidebar = inject("Store")(
  observer(props => {
    const classes = useStyles();
    return (
      <Grid container className={classes.root}>
        <Grid item className={classes.maps} xs={12}>
          <Maps2 props={props} />
        </Grid>
        <Grid item className={classes.listOfCities} xs={12}>
          <ListOfCities props={props} />
        </Grid>
      </Grid>
    );
  })
);

export default Sidebar;
