import React from "react";
import ReactDOM from "react-dom";
import { geolocated } from "react-geolocated";

import "./index.css";
import App from "./App.js";
import * as serviceWorker from "./serviceWorker";
import StorePattern from "./store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Main extends React.Component {
  render() {
    console.log("index ", this.props);
    return (
      <StorePattern>
        <App />
      </StorePattern>
    );
  }
}

const MainWithGeoloc = geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(Main);

ReactDOM.render(<MainWithGeoloc />, document.querySelector("#root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
