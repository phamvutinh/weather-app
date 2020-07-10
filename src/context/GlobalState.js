import React, { createContext, useEffect, useState } from "react";
import weatherApi from "../api/weatherApi";

const initialState = {
  woeid: 1252431,
};

export const GlobalContext = createContext(initialState);

export function GlobalProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [woeid, setWoeid] = React.useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const params = { lattlong: `${lat},${lng}` };
      weatherApi
        .locationSearch(params)
        .then((result) => {
          setCities(result.data);
          setWoeid(result.data[0].woeid);
          setLoading(false);
        })
        .catch((err) => {
          throw err;
        });
    });
  }, []);

  function addWoeid(id) {
    if (id) {
      setLoading(true);
      setWoeid(id);
    }
  }

  return (
    <GlobalContext.Provider
      value={{ woeid, addWoeid, cities, loading, setLoading }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
