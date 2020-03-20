import React from "react";

//IMPORT MATERIAL UI COMPONENTS
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardMedia, CardActionArea } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { fade } from "@material-ui/core/styles";

//IMPORT EXTERNAL STYLE
import "./topSection.scss";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,

    //width: "150px",
    //marginTop: "10px",
    //minHeight: "70px",
    //paddingBottom: "20px",
    //color: theme.palette.secondary.white,
    // marginRight: "5px",
    // marginLeft: "5px",
    // display: "block",
    // backgroundColor: blue[200],
    height: "200px",
    backgroundColor: fade(theme.palette.secondary.white, 0.1),
    paddingTop: "20px",
    paddingBottom: "40px",
    paddingLeft: "5px",
    paddingRight: "5px"
  },
  media: {
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "20px",
    paddingBottom: "20px",
    width: "10%",
    //  height: "20%"
    color: "white"
  },
  message: {
    color: theme.palette.secondary.main,
    fontWeight: 700
  },
  value: {
    color: theme.palette.secondary.white
  }
}));

//const arrow = "../../assets/images/right-arrow.svg";

export default function WeatherDetails(props) {
  const classes = useStyles();

  return (
    <>
      <CardActionArea>
        <Card className={classes.root} wrap="nowrap">
          <CardMedia image={props.url} className={classes.media} />
          <CardContent>
            <Typography className={classes.message} noWrap>
              {props.message}
            </Typography>
            <Typography className={classes.value} noWrap>
              {props.value}
              {props.value2}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </>
  );
}
