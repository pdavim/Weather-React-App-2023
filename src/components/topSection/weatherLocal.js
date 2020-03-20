import React from "react";
import Clock from "react-live-clock";
import Moon from "react-moon";

//IMPORT MATERIAL UI COMPONENTS
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Button from "@material-ui/core/Button";

import Add from "@material-ui/icons/Add";
import Star from "@material-ui/icons/Star";
//IMPORT EXTERNAL STYLE
import "./topSection.scss";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    width: "100%",
    //height: "700px",
    color: theme.palette.secondary.white,
    backgroundColor: theme.palette.secondary.dark
    //minWidth: 370
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: "2.8rem",
    // fontWeight: 900,
    textTransform: "uppercase"
  },
  temp: {
    color: theme.palette.secondary.white,
    fontSize: "1.8rem",
    fontWeight: 600
  },
  pos: {
    marginBottom: 10,
    color: theme.palette.secondary.white,
    width: 100
  },
  posTitle: {
    //color: theme.palette.secondary.white,
    color: theme.palette.secondary.greyLight,
    width: 100
  },
  media: {
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingTop: "40px",
    paddingBottom: "120px",
    maxWidth: "300px",
    display: "flex"
  },
  mainContainer: {
    flexGrow: 1,
    paddingRight: 10,
    paddingLeft: 10,
    marginLeft: 10
  },
  gridList: {
    width: "100%",
    height: 450,
    alignContent: "center",
    alignmentBaseline: "central",
    textAlign: "center"
  },
  titleDate: {
    fontSize: 14,
    //fontWeight: 400,
    fontStyle: "italic",
    paddingTop: 0
  },
  titleHour: {
    fontSize: 28,
    //fontWeight: 500,
    paddingTop: 0
  },
  titleDay: {
    fontSize: 16,
    //fontWeight: 400,
    paddingTop: 0
  },
  moonText: {
    width: 100,
    //fontSize: 18,
    //fontWeight: 500,
    color: theme.palette.secondary.greyLight,
    paddingTop: 0,
    textTransform: "uppercase"
  },
  buttonAdd: {
    color: theme.palette.secondary.lightWarm
  },
  mediaMoon: {
    //paddingLeft: "40px",
    //paddingRight: "40px",
    // width: 100,
    // height: "10px",
    //display: "flex"
  }
}));

export default function WeatherLocal(props) {
  const classes = useStyles();
  //const theme = useTheme();
  //const primaryUi = props.theme.palette.primary.light;
  // console.log("weather Local ", props);
  let location = props.props.props.activeCity.city.name;
  let moon = props.props.props.moonPhaseData;
  const { setDefaultCity, addCityToList } = props.store.props;
  return (
    <Grid className="mainContainer" container spacing={1} align="center">
      <Card className={classes.card}>
        <Grid container>
          <Grid item xs="12" sm="12">
            <CardContent>
              <Typography variant="h3">
                <Clock
                  format={"Do, MMMM"}
                  className={classes.titleDate}
                  interval={60000}
                />
                <br />
                <Clock
                  format="HH:mm:ss"
                  interval={1000}
                  ticking={true}
                  className={classes.titleHour}
                />
                <br />
                <Clock
                  format={"dddd"}
                  interval={60000}
                  className={classes.titleDay}
                />
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs="12" sm="6">
            <CardContent>
              <CardContent>
                <Typography variant="h2" className={classes.title}>
                  {location}
                </Typography>
              </CardContent>
              <CardMedia
                className={classes.media}
                image={props.iconURL}
                title="Weather"
              />

              <Typography variant="h3" className={classes.temp}>
                {props.temp_c}ºC
              </Typography>
              <Typography variant="body2" className={classes.posTitle}>
                It's {props.lightDay}
              </Typography>
              <Typography variant="body2" className={classes.pos}>
                Sky {props.text}
              </Typography>

              <Button
                size="small"
                className={classes.buttonAdd}
                onClick={setDefaultCity}
              >
                <Star />
              </Button>
              <Button size="small" color="primary" onClick={addCityToList}>
                <Add />
              </Button>
            </CardContent>
          </Grid>
          <Grid item xs="12" sm="6">
            <CardContent>
              <CardContent>
                <Typography variant="h2" className={classes.title}>
                  Moon
                </Typography>
              </CardContent>
              <CardContent>
                <CardMedia className={classes.mediaMoon} title="moon">
                  <Moon phase={moon[1]} size={128} />
                </CardMedia>
              </CardContent>
              <CardContent>
                <Typography variant="body1" className={classes.moonText}>
                  {moon[0]}
                </Typography>
              </CardContent>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
