const windDirection = deg => {
  if (deg === 0 || deg === 360) {
    const degName = "N";
    // console.log("N");
    return degName;
  } else if (deg === 90) {
    const degName = "E";
    // console.log("East");
    return degName;
  } else if (deg === 180) {
    const degName = "S";
    // console.log("S");
    return degName;
  } else if (deg === 270) {
    const degName = "W";
    // console.log("West");
    return degName;
  } else if (deg < 90 && deg > 0) {
    const degName = "NE";
    // console.log("NE");
    return degName;
  } else if (deg < 180 && deg > 90) {
    const degName = "SW";
    //  console.log("SW");
    return degName;
  } else if (deg < 270 && deg > 180) {
    const degName = "SE";
    // console.log("SE");
    return degName;
  } else if (deg < 360 && deg > 270) {
    const degName = "NE";
    // console.log("NE");
    return degName;
  } else {
    console.log("waiting for data");
  }
};

export default windDirection;
