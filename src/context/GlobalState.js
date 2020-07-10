import React, { createContext, useEffect, useState } from "react";
import weatherApi from "../api/weatherApi";

const initialState = {
  woeid: null,
  unit: "C",
};

export const GlobalContext = createContext(initialState);

export function GlobalProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [woeid, setWoeid] = React.useState(null);
  const [unit, setUnit] = React.useState("C");

  useEffect(() => {
    setLocation();
  }, []);

  function setLocation() {
    setLoading(true);
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
  }

  function addWoeid(id) {
    if (id) {
      setLoading(true);
      setWoeid(id);
    }
  }

  function searchByText(query) {
    weatherApi
      .locationSearch({ query })
      .then((result) => {
        setCities(result.data);
        setLoading(false);
      })
      .catch((err) => {
        throw err;
      });
  }

  return (
    <GlobalContext.Provider
      value={{
        setUnit,
        unit,
        setLocation,
        woeid,
        addWoeid,
        cities,
        loading,
        setLoading,
        searchByText,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
