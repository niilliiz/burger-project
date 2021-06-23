import React from "react";
import Classes from "./navigationItems.module.css";
import NavItem from "./NavItem/navItem";

const navigationItem = () => (
  <ul className={Classes.NavigationItems}>
    <NavItem link="/" exact>
      Burger Builder
    </NavItem>
    <NavItem link="/orders"> Orders </NavItem>
  </ul>
);

export default navigationItem;
