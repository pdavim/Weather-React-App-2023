import React from "react";
import Moon from "react-moon";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import { fade } from "@material-ui/core/styles";

//IMPORT FUNCTIONS
import timeConvert from "../../../functions/timeConvertet";
import windDirection from "../../../functions/windDirection";

const useStyles = makeStyles(theme => ({
  card: {
    flexGrow: 1,
    // width: 200,
    //width: "100%",
    //minHeight: 450,
    marginBottom: 5,
    background: fade(theme.palette.secondary.white, 0.1),
    direction: "column",
    alignItems: "center",
    justify: "center",
    alignContent: "center"
  },
  bullet: {
    display: "inline-block",
    margin: "0 1px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  media: {
    // display: "flex",
    //minWidth: 100,
    height: 100,
    marginTop: 5, // 16:9
    marginBottom: 5, // 16:9
    marginRight: 80,
    marginLeft: 80,
    paddingRight: 10,
    paddingLeft: 10
  },
  description: {
    paddingBottom: 10
  }
}));

export default function CardForcast(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  //console.log("Cardforcast", props);
  let dtTime = timeConvert(props.props.dt);

  //let windName = windDirection(props.props.wind.deg);
  // let windName = windDirection(props.props.wind.deg);

  //console.log("dt", dtTime[1]);

  //GET ICONS
  let iconDay = `http://openweathermap.org/img/wn/${
    props.props.weather[0].icon
  }@2x.png`;
  return (
    <Card className={classes.card}>
      <CardHeader title={dtTime[1]} subheader={dtTime[0]} />

      <CardMedia className={classes.media} image={iconDay} title="weather" />
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          Humidity
          {bull}
          {props.props.main.humidity}%
        </Typography>

        <Typography variant="h5" component="h2">
          {props.props.main.temp}
          ºC
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Feels
          <br />
          {props.props.main.feels_like}ºC
        </Typography>
        <Typography variant="h6" component="h1" className={classes.description}>
          {props.props.weather[0].description}
        </Typography>
      </CardContent>
    </Card>
  );
}
