import React from "react";
import { fade, makeStyles, withTheme } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import InputBase from "@material-ui/core/InputBase";
import Time from "../../topSection/time";
import { withStyles } from "@material-ui/core/styles";

import "./index.css";

const useStyles = theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    flexGrow: 1,
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(9),
    marginLeft: 4,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    },
    inputRoot: {
      color: "inherit"
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: 120,
        "&:focus": {
          width: 200
        }
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
      display: "none"
    }
  }
});

//const classe = useStyles();

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelectLocationOpen: false,
      locationName: ""
    };
  }

  //x = classe();
  onToggleSelectLocation() {
    this.setState(prevState => ({
      isSelectLocationOpen: !prevState.isSelectLocationOpen
    }));
  }

  onLocationNameChange(e) {
    console.log(e.target.value);
    this.setState({
      locationName: e.target.value
    });
  }

  onSelectCity() {
    const { locationName } = this.state;
    const { eventEmitter } = this.props;
    eventEmitter.emit("updateWeather", locationName);
    console.log(" this states", locationName);
    this.setState({ isSelectLocationOpen: false });
  }
  render() {
    const classes = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <WbSunnyIcon
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            />

            <Typography variant="h6" className={classes.title}>
              Weather
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon} />
              <InputBase
                placeholder="Search…"
                onChange={this.onLocationNameChange.bind(this)}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
              <button
                className="btn btn-select-location"
                onClick={this.onSelectCity.bind(this)}
              >
                Select
              </button>
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Typography>
                <Time color="inherit" />
              </Typography>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-label="show more" />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withTheme(withStyles(useStyles)(Header));
