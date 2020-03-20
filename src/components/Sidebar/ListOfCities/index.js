import React from "react";
import { observer, inject } from "mobx-react";

//IMPORT MATERIAL UI COMPONENTS
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { fade } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import "./index.css";
const useStyles = makeStyles(theme => ({
  mainRoot: {
    paddingTop: 10,
    flexGrow: 1
    // marginLeft: 2,
    //padding: 4
    // borderRadius: 7,
    //  backgroundColor: theme.palette.secondary.dark
  },
  root: {
    //display: "flex",
    backgroundColor: fade(theme.palette.secondary.white, 0.1),
    width: "100%",
    height: "600px"
    /// marginBottom: 4
  },

  content: {
    //display: "flex",
    alignContent: "center"
  },

  deleteButton: {
    marginRight: 10,
    color: theme.palette.secondary.alert,
    fontSize: "0.6rem"
  },
  title: {
    //fontSize: "1rem",
    //color: "black",
    //fontWeight: 700,
    textAlign: "center",
    color: theme.palette.secondary.white
    //paddingTop: 10
  },
  headerTitle: {
    //fontSize: "1.2rem",
    textAlign: "center",
    color: theme.palette.secondary.white,
    paddingTop: 5,
    //fontWeight: 500,
    textTransform: "uppercase"
  },
  bodyInfo: {
    color: fade(theme.palette.secondary.greyLight, 0.8),
    textTransform: "capitalize",
    fontSize: 12,
    paddingBottom: 5
  },
  myListCity: {
    paddingTop: 40,
    //paddingBottom: 40,
    //height: 200,

    color: "transparent"
  },
  myListCityCard: {
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 4,
    marginBottom: 4,
    borderTop: 1,
    borderBottom: 1,
    borderLeft: 0,
    borderRight: 0,
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderStyle: "solid",
    //height: 200,

    backgroundColor: "rgba(255, 255, 255, 0.05)"
  }
}));

const ListOfCities = inject("Store")(
  observer(props => {
    //@observable cityName ="";
    let listCities = props.Store.citiesList;
    let citiesListLength = listCities.length;
    console.log("List of cities ", listCities);

    //  console.log("onclick ", props);
    const { getWeatherData, deleteCityFromList } = props.Store;

    const clickCity = async value => {
      // console.log("onclick ", props.Store.cityName);
      console.log("onclick ", value.city);

      props.Store.cityName = await value.city;
      props.Store.isLoading = true;
      //await updateWeatherD(value);
      await getWeatherData(value.city);
      await props.props.eventEmitter.emit("updateWeather", value.city);
    };

    const classes = useStyles();
    return (
      <Grid container className={classes.mainRoot} align="center">
        <Grid item xs="12">
          <Typography variant="h3" className={classes.headerTitle}>
            My Cities
          </Typography>
          {citiesListLength === 0 ? (
            <Typography variant="body1" className={classes.bodyInfo}>
              Add a city
            </Typography>
          ) : (
            <Typography variant="body1" className={classes.bodyInfo}>
              Check the weather
            </Typography>
          )}
        </Grid>
        <Grid container className={classes.mainRoot}>
          {listCities.map(city => {
            let index = listCities.indexOf(city);
            let id = index;
            /* console.log("index of listCities ", listCities);
            console.log("index of city ", city);
            console.log("index of index ", index); */
            return (
              <Grid xs={12} className={classes.myListCityCard} container>
                <Grid item xs={12}>
                  <Grid item>
                    <Typography variant="h3" className={classes.headerTitle}>
                      {city.city}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" className={classes.bodyInfo}>
                      {city.temp}ºC
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    className="mt-1"
                    //className={classes.deleteButton}
                    onClick={() => clickCity(city)}
                  >
                    View Details
                  </Button>
                  <Button
                    size="small"
                    className={classes.deleteButton}
                    onClick={() => deleteCityFromList(id)}
                  >
                    delete
                  </Button>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    );
  })
);

export default ListOfCities;
