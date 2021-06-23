import React from "react";
import Burger from "../../Burger/burger";
import Button from "../../UI/Button//button";
import Classes from "./checkcoutSummary.module.css";
const checkoutSummary = (props) => {
  return (
    <div className={Classes.CheckoutSummary}>
      <h1>We hope it tasts well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.onCheckoutCancelled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.onCheckoutContinued}>
        Continue
      </Button>
    </div>
  );
};

export default checkoutSummary;
