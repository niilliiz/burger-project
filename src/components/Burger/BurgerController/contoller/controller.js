import React from "react";
import classes from "./contoller.module.css";

const controller = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Less}
        onClick={props.removed}
        disabled={props.disabled}
      >
        -
      </button>
      <button className={classes.More} onClick={props.added}>
        +
      </button>
    </div>
  );
};

export default controller;
