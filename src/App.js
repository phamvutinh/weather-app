import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import "./assets/styles/index.scss";
import { SideBar } from "./components/common/";

function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <div className="App__content">
          <Route exact path="/" component={Home} />
        </div>
      </div>
    </Router>
  );
}

export default App;
