import React from "react";
import { observer } from "mobx-react";
import PropTypes from "prop-types";

//IMPORT MATERIAL UI COMPONENTS
import { fade } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

import "./index.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },

  menuButton: {
    marginRight: 10,
    color: theme.palette.secondary.white
  },
  title: {
    fontSize: 20,
    fontWeight: 900,
    textTransform: "uppercase",
    padding: theme.spacing(1, 3, 1, 2),
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  appBar: {
    height: 80,
    paddingTop: 10,
    marginBottom: 5,
    width: "100%",
    position: "relative",
    backgroundColor: theme.palette.secondary.headerBackground
  },
  search: {
    //flexGrow: 1,
    textAlign: "left",
    position: "relative",
    width: "100%",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 2
  },
  inputRoot: {
    color: theme.palette.secondary.white
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 2),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "flex",

    paddingLeft: "20%",
    [theme.breakpoints.up("md")]: {
      paddingLeft: "20%",
      display: "flex"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.secondary.white
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  }
}));

const Search = observer(props => {
  //@observable cityName ="";

  const { getWeatherData } = props;

  // console.log("search props ", props);

  let userCity = "";

  const onLocationNameChange = async e => {
    // console.log(e.target.value);
    e.preventDefault();

    let cityForm = await e.target.value;
    userCity = await cityForm;
    //userCity = await appState.Store.activeCity;
    // console.log("Header cityForm ", appState.Store.activeCity);
  };

  const onSelectCity = async () => {
    let appState = await props.props;
    // appState.Store.activeCity = userCity;

    console.log("cityForm ", props);
    appState.Store.cityName = userCity;
    // console.log("appState ", appState.Store);
    // console.log("props search ", props);
    await getWeatherData(appState.Store.cityName);
    // getWeatherData(appState.Store.cityName);
    props.props.eventEmitter.emit("updateWeather", userCity);
  };

  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <WbSunnyIcon
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
          />

          <Typography variant="h6" className={classes.title} color="text">
            Weather
          </Typography>
          <div className={classes.grow} />
          <div className={classes.search}>
            <InputBase
              placeholder=" Search City…"
              onChange={onLocationNameChange}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search city..." }}
            />
          </div>
          <div>
            <IconButton onClick={onSelectCity} className={classes.searchIcon}>
              <SearchIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
});

Search.propTypes = {
  errorOnRequest: PropTypes.string,
  //fetchCityWeather: PropTypes.func.isRequired,
  getWeatherData: PropTypes.func.isRequired
};

export default Search;
