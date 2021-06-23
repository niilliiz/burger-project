import React, { Component } from "react";
import Layout from "./HOC/Layout/layout";
import BurgerBuilder from "./container/BurgerBuilder/burgerbuilder";
import Checkout from "./container/Checkout/checkout";
import { Route, Switch } from "react-router-dom";
import Orders from "./container/Orders/orders";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
