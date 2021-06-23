import React from "react";
import Classes from "./order.module.css";

const order = (props) => {
  const ingredients = [];
  for (let ingName in props.ingredients) {
    ingredients.push({ name: ingName, amount: props.ingredients[ingName] });
  }
  console.log(ingredients);
  const ingredientsOutput = ingredients.map((ig) => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          padding: "3px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          boxShadow: "1px 1px 3px #ccc",
        }}
      >
        {ig.name} ({ig.amount}),
      </span>
    );
  });
  return (
    <div className={Classes.Order}>
      <p>Ingredients: {ingredientsOutput}</p>
      <p>
        Price: <strong>USD {props.price}</strong>
      </p>
    </div>
  );
};
export default order;
