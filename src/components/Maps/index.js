import React from "react";
import { Circle, Gmaps, Marker, InfoWindow } from "react-gmaps";
import Typography from "material-ui/styles/typography";

const params = { v: "3.exp", key: "AIzaSyARLmYV96CowV3TLAywMITagHDFmD9SVGA" };

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

class Maps extends React.Component {
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log("onDragEnd", e);
  }

  onCloseClick() {
    console.log("onCloseClick");
  }

  onClick(e) {
    console.log("onClick", e);
  }

  defaultProps = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11
  };

  render() {
    // console.log("maps props", this.props.props.Store.activeCity);
    return (
      <div>
        {!this.props.props.Store.activeCity ? (
          <p style={styles.load}>
            <h3>loading</h3>
          </p>
        ) : this.props.props.Store.activeCity &&
          this.props.props.Store.activeCity.list[0].dt ? (
          <div>
            <Gmaps
              style={styles.cols}
              width={"100%"}
              height={"200px"}
              lat={this.props.props.Store.coordenatesLat}
              lng={this.props.props.Store.coordenatesLon}
              zoom={12}
              loadingMessage={this.props.props.Store.activeCity.list[0].dt}
              params={params}
              onMapCreated={this.onMapCreated}
            >
              <InfoWindow
                lat={this.props.props.Store.coordenatesLat}
                lng={this.props.props.Store.coordenatesLon}
                content={this.props.props.Store.activeCity.list[0].main.temp}
                onCloseClick={this.onCloseClick}
                radius={100}
              />
              <Marker
                lat={this.props.props.Store.coordenatesLat}
                lng={this.props.props.Store.coordenatesLon}
                //draggable={true}
                onDragEnd={this.onDragEnd}
              />

              <Circle
                lat={this.props.props.Store.coordenatesLat}
                lng={this.props.props.Store.coordenatesLon}
                radius={100}
                //onClick={this.onClick}
              />
            </Gmaps>
          </div>
        ) : (
          <h3 style={styles.load}>No Data</h3>
        )}
      </div>
    );
  }
}

export default Maps;
