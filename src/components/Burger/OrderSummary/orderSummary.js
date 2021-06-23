import React, { Component } from "react";
import Aux from "../../../HOC/Aux/Aux";
import Button from "../../UI/Button/button";

class orderSummary extends Component {
  //this could be a functional Component...
  componentWillUpdate() {
    console.log("Order Summary will update");
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredient).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
            {this.props.ingredient[igKey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>Your Order:</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price}</strong>
        </p>
        <p>Continue to Checkout?</p>

        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseSuccessed}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default orderSummary;
