import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/checkSummary/checkoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/contactData.js";

class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0,
  };
  onCheckoutCancelHandler = () => {
    this.props.history.goBack();
  };
  onCheckoutContinueHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    console.log(query.entries());
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === "price") {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({
      ingredients: ingredients,
      totalPrice: price,
    });
    console.log(this.state.ingredients);
  }
  render() {
    console.log(this.state.ingredients);
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          onCheckoutCancelled={this.onCheckoutCancelHandler}
          onCheckoutContinued={this.onCheckoutContinueHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={(props) => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
