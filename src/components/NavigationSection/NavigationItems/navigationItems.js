import React from "react";
import Classes from "./navigationItems.module.css";
import NavItem from "./NavItem/navItem";

const navigationItem = () => (
  <ul className={Classes.NavigationItems}>
    <NavItem link="/" active>
      Burger Builder
    </NavItem>
    <NavItem link="/"> CheckOut </NavItem>
  </ul>
);

export default navigationItem;
