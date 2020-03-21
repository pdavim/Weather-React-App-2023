const fetchTimezone = async (cityTimezone, activeCity) => {
  let timezoneFetch = 0;
  try {
    if (!cityTimezone) {
      cityTimezone = 0;
    } else {
      timezoneFetch = await activeCity.city.timezone;
      cityTimezone = timezoneFetch;
    }
  } catch (err) {
    throw err;
  }
};

export default fetchTimezone;
