import React from "react";
import Classes from "./navItem.module.css";

const navItem = (props) => (
  <li className={Classes.NavItem}>
    <a href={props.link} className={props.active ? Classes.active : null}>
      {props.children}
    </a>
  </li>
);

export default navItem;
