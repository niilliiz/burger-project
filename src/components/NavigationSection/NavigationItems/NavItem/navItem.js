import React from "react";
import { NavLink } from "react-router-dom";
import Classes from "./navItem.module.css";

const navItem = (props) => (
  <li className={Classes.NavItem}>
    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName={Classes.active}
    >
      {props.children}
    </NavLink>
  </li>
);

export default navItem;
