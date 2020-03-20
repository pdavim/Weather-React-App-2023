// GET GEOPOSITION FROM BROWSER LOCATION DATA

const navigatorGeolocationPosition = () =>
  navigator.geolocation.getCurrentPosition(function(position) {
    // Get the coordinates of the current position.
    var lati = position.coords.latitude;
    var lng = position.coords.longitude;
    let posiction = [lati, lng];
    console.log("lat geolocation is ", lati);
    console.log("long geolocation is ", lng);

    return [{ lati, lng }, { posiction }];
  });

export default navigatorGeolocationPosition;
