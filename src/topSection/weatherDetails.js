import React from "react";

//IMPORT MATERIAL UI COMPONENTS
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { blue } from "@material-ui/core/colors";

//IMPORT EXTERNAL STYLE
import "./topSection.scss";

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: "24.5%",
    maxWidth: "45%",
    marginTop: "5px",
    color: theme.palette.text.secondary,
    marginRight: "1px",
    marginLeft: "1px",

    display: "inline-block",
    backgroundColor: blue[200]
  }
}));

const arrow = "../assets/images/right-arrow.svg";

export default function WeatherDetails(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        {props.message}
        <br />
        <strong>
          {props.value}
          {props.value2}
        </strong>
      </CardContent>
    </Card>
  );
}
