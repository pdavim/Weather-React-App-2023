// Fetch data from an url api and return an object
import axios from "axios";

const fetchUrlData = async a => {
  try {
    const response = await axios.get(a);
    //console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return await error;
  }
};

export default fetchUrlData;
