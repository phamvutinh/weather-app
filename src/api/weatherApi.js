import axiosClient from "./axiosClient";

const weatherApi = {
  getAll: (params) => {
    const url = "/";
    return axiosClient.get(url, { params });
  },
};
export default weatherApi;
