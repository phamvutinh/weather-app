import axiosClient from "./axiosClient";

const weatherApi = {
  locationSearch: (params) => {
    const url = "location/search/";
    return axiosClient.get(url, { params });
  },
  location: (woeid) => {
    const url = `location/location/${woeid}`;
    return axiosClient.get(url);
  },
};
export default weatherApi;
