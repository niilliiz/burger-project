import React from "react";
import classes from "./burgerController.module.css";
import Controller from "./contoller/controller";

const conrtols = [
  { label: "Salad", type: "salad" },
  { label: "Bacom", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const burgerContoller = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {conrtols.map((ctrl) => {
        return (
          <Controller
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientremoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
          />
        );
      })}
      <button
        className={classes.OrderButton}
        disabled={!props.purchaseable}
        onClick={props.purchased}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default burgerContoller;
