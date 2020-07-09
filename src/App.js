import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import "./assets/styles/index.scss";
import { SideBar } from "./components/common/";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <SideBar />
          <div className="App__content">
            <Route exact path="/" component={Home} />
          </div>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
