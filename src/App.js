import React from "react";
import "./App.css";
import { HomePage } from "./component/pages/homepage/homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./component/shop/shop";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
