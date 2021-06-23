import React from "react";
import classes from "./burger.module.css";
import BurgerIngredient from "./BurgerIngredient/burgerIngredient";

const burger = (props) => {
  let transformedIng = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    });
  if (transformedIng.length === 0) {
    transformedIng = <p>Please add ingredients...</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIng}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
