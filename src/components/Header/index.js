import React from "react";
import { observer, inject } from "mobx-react";

//IMPORT MATERIAL UI COMPONENTS
import { fade } from "@material-ui/core/styles";

import { useTheme } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";

import "./index.css";
import Search from "../Search";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#ffffff"
  },
  info: {
    light: "#64b5f6",
    main: "#2196f3",
    dark: "#1976d2",
    contrastText: "#ffcc00"
  },
  menuButton: {
    marginRight: 10
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    },

    main: "#2196f3"
  },
  search: {
    flexGrow: 1,
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 2,
    width: "50%",
    height: "50%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
      height: "50%"
    },
    inputRoot: {
      color: "inherit",
      height: "50%",
      padding: theme.spacing(1, 1, 1, 5)
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 5),
      paddingLeft: "10px",
      transition: theme.transitions.create("width"),
      width: "50%",
      height: "50%",
      [theme.breakpoints.up("sm")]: {
        width: 120,
        "&:focus": {
          width: 200
        }
      }
    },
    sectionDesktop: {
      display: "flex",

      paddingLeft: "20%",
      [theme.breakpoints.up("md")]: {
        display: "flex"
      }
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "flex"
      }
    }
  }
}));

const Header = inject("Store")(
  observer(props => {
    //@observable cityName ="";
    console.log("Store ", props);

    const { getWeatherData } = props.Store;

    const theme = useTheme();
    const classes = useStyles();
    return (
      <div>
        <Search
          getWeatherData={getWeatherData}
          updateWeather={props.updateWeather}
          props={props}
        />
      </div>
    );
  })
);

export default Header;
