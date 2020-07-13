import axios from "axios";
import queryString from "query-string";

const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

const axiosClient = axios.create({
  baseURL: `${corsAnywhere}${process.env.REACT_APP_API_URL}`,
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-Requested-With": "XMLHttpRequest",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axios.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    console.log("Error with Axios");
    throw error;
  }
);
export default axiosClient;
