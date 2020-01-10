import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import "./topSection.scss";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //defauilt value of the date time
      dates: "",
      hour: ""
    };
  }

  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    that.setState({
      //Setting the value of the date time
      dates: date + "/" + month + "/" + year
    });
    that.setState({
      //Setting the value of the date time

      hour: hours + ":" + min + ":" + sec
    });
  }

  render() {
    return (
      <div className="date-container">
        <Typography className="titleTime"> {this.state.dates}</Typography>
      </div>
    );
  }
}
export default Time;
