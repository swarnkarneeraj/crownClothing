import React from "react";
import "./App.css";
import { HomePage } from "./pages/homepage/homepage";
import signInSignUpPages from "./pages/sign-in-sign-up-pages/sign-in-sign-up-pages";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./component/shop/shop";
import Header from "./component/header/header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/signin" component={signInSignUpPages}></Route>
      </Switch>
    </div>
  );
}

export default App;
