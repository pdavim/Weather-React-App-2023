//Import packages
import React from "react";

//Import MOBX
import { observer, inject } from "mobx-react";

//Import Material UI componets
import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
//Import custom components
import Weather from "./weather";
import ListOfCities from "../Sidebar/ListOfCities";
import { minWidth } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minWidth: "350px",
    maxWidth: "100%"
  },
  sidebar: {
    display: "flex",
    backgroundColor: theme.palette.secondary.white
  }
}));

const TopSection = inject("Store")(
  observer(props => {
    // console.log("my props ", props);
    const classes = useStyles();

    return (
      <ThemeProvider theme={props.theme}>
        <Grid container className={classes.root} spacing={1}>
          <Grid item xs={12}>
            <Weather {...props} />
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  })
);
export default TopSection;
