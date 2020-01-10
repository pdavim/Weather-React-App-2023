import React from "react";

//IMPORT MATERIAL UI COMPONENTS
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { blue } from "@material-ui/core/colors";

//IMPORT EXTERNAL STYLE
import "./topSection.scss";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: "50%",
    maxWidth: "100%",

    backgroundColor: blue[100]
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  media: {
    height: 10,
    paddingTop: "16.25%",
    minWidth: "20%",
    maxWidth: "30%"
  }
}));

export default function WeatherLocal(props) {
  const classes = useStyles();
  //console.log("weather ocal ", props);

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent align="center">
        <CardMedia
          className={classes.media}
          image={props.iconURL}
          title="weather"
        />
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.location}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.temp_c}ºC
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          It's {props.lightDay}
        </Typography>
        <Typography variant="body1" component="p">
          <b>Sky:</b> {props.text}
        </Typography>
        <Typography variant="body2" component="p">
          <b> Sunrise:</b> {props.sunrise} | <b>Sunset:</b> {props.sunset}
        </Typography>
      </CardContent>
    </Card>
  );
}
