import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  card: {
    minWidth: 150,
    maxWidth: 220,
    minHeight: 450,
    paddingTop: 12,
    background: blue[200],
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
    maxWidth: "100%",
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
});

var dayWeek = "";
const dayLibrays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const switchDay = x => {
  switch (x) {
    case 6:
      dayWeek = dayLibrays[x];
      // console.log(dayWeek);
      return dayWeek;

    case 5:
      dayWeek = dayLibrays[x];
      //  console.log(dayWeek);
      return dayWeek;

    case 4:
      dayWeek = dayLibrays[x];
      // console.log(dayWeek);
      return dayWeek;

    case 3:
      dayWeek = dayLibrays[x];
      // console.log(dayWeek);
      return dayWeek;

    case 2:
      dayWeek = dayLibrays[x];
      //console.log(dayWeek);
      return dayWeek;

    case 1:
      dayWeek = dayLibrays[x];
      // console.log(dayWeek);
      return dayWeek;

    case 0:
      dayWeek = dayLibrays[x];
      // console.log(dayWeek);
      return dayWeek;

    default:
      dayWeek = "Looking forward to the Weekend";
      // console.log("Looking forward to the Weekend");
      return dayWeek;
  }
};

const timeConvert = dt => {
  var dateData = new Date(dt * 1000);

  switchDay(dateData.getDay());
  //console.log("dayweek ", dayWeek);
  var date = dateData.getDate();
  var month = dateData.getMonth() + 1;
  var finalDate = date + "/" + month;
  //console.log(finalDate);
  var dateArray = [finalDate, dayWeek];
  return dateArray;
};

export default function CardForcast(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  //console.log("Cardforcast", props.props);
  let dtTime = timeConvert(props.props.dt);

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
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Humidity
          {bull}
          {props.props.main.humidity}%
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom="true">
          {props.props.main.temp}
          ºC
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Feels
          <br />
          {props.props.main.feels_like}ºC
        </Typography>
        <Typography variant="h6" component="h1">
          {props.props.weather[0].description}
        </Typography>
      </CardContent>
    </Card>
  );
}
