import React, { createContext } from "react";

const initialState = {
  woeid: null,
};

export const GlobalContext = createContext(initialState);

export function GlobalProvider({ children }) {
  const [woeid, setWoeid] = React.useState(null);

  function addWoeid(id) {
    if (id) {
      setWoeid(id);
    }
  }

  return (
    <GlobalContext.Provider value={{ woeid, addWoeid }}>
      {children}
    </GlobalContext.Provider>
  );
}
