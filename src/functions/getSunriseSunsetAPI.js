import axios from "axios";

// GET SUNRISE AND SUNSET HOUR FROM API
const getSunRiseSunsetApi = async (lat, lon) => {
  let latitudeProp = lat;
  let longitudeProp = lon;
  //  const URLsunsetSunrise = `https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400`;
  const URLsunsetSunrise = `https://api.sunrise-sunset.org/json?lat=${latitudeProp}&lng=${longitudeProp}`;
  await axios.get(URLsunsetSunrise).then(res => {
    console.log("sunrise is ", res.data.results);

    return res.data.results;
  });
};

export default getSunRiseSunsetApi;
