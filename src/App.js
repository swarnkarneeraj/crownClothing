import React from "react";
import "./App.css";
import { HomePage } from "./component/pages/homepage/homepage";
import { Switch, Route } from "react-router-dom";

const Hats = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/hats" component={Hats}></Route>
      </Switch>
    </div>
  );
}

export default App;
