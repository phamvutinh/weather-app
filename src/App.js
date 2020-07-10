import React, { useEffect, useContext, useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import "./assets/styles/index.scss";
import { SideBar } from "./components/common/";
import { GlobalContext } from "./context/GlobalState";
import weatherApi from "./api/weatherApi";

function App() {
  const { woeid, setLoading } = useContext(GlobalContext);
  const [nowWeather, setNowWeather] = useState({});
  const [listWeather, setListWeather] = useState([]);
  const [titleCity, setTitleCity] = useState("Loading...");

  useEffect(() => {
    if (woeid) {
      weatherApi
        .location(woeid)
        .then((result) => {
          setNowWeather(result.data.consolidated_weather[0]);
          setListWeather(result.data.consolidated_weather);
          setTitleCity(result.data.title);
          setLoading(false);
        })
        .catch((err) => {
          throw err;
        });
    }
  }, [woeid, setLoading]);

  return (
    <Router>
      <div className="App">
        <SideBar titleCity={titleCity} {...nowWeather} />
        <div className="App__content">
          <Route
            exact
            path="/"
            component={() => (
              <Home today={nowWeather} listWeather={listWeather} />
            )}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
