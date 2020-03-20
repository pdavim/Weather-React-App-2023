import React from "react";
import { observer, inject } from "mobx-react";

//import { Circle, Gmaps, Marker, InfoWindow } from "react-gmaps";
import GoogleMapReact from "google-map-react";

const styles = {
  item: {
    backgroundColor: "white",
    transition: "background-color 0.2s linear"
  },
  cols: {
    float: "left"
  },
  load: {
    color: "white",
    textAlign: "center"
  }
};
const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)"
    }}
  >
    {text}
  </div>
);

const Maps2 = inject("Store")(
  observer(props => {
    let defaultProps;
    // console.log("porps maps 2 ", props);
    let activecityUser = props.Store.activeCity;

    if (!props.Store.activeCity) {
      return;
    } else if (
      typeof activecityUser === "string" ||
      activecityUser instanceof String
    ) {
      return;
    } else {
      let mycity = props.Store.activeCity;
      // console.log("my city length ", mycity);
      //  console.log("my city tupiof ", typeof mycity);

      defaultProps = {
        center: {
          lat: props.Store.activeCity.city.coord.lat,
          lng: props.Store.activeCity.city.coord.lon
        },
        zoom: 11
      };
      //  console.log("Maps 2 Props ", props.Store.activeCity);
    }

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        {!props.Store.cityName && !props.Store.activeCity.city.coord ? (
          <p style={styles.load}>
            <h3>loading</h3>
          </p>
        ) : props.Store.activeCity && props.Store.activeCity.city.coord ? (
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyARLmYV96CowV3TLAywMITagHDFmD9SVGA"
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={props.Store.activeCity.city.coord.lat}
              lng={props.Store.activeCity.city.coord.lon}
              text={props.Store.activeCity.list[0].main.temp}
            />
          </GoogleMapReact>
        ) : (
          <h3 style={styles.load}>No Data</h3>
        )}
      </div>
    );
  })
);

export default Maps2;
