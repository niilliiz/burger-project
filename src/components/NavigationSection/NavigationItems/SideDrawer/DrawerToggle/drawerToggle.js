import React from "react";
import Classes from "./drawerToggle.module.css";

const drawerToggle = (props) => (
  <div onClick={props.clicked} className={Classes.DrawerToggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;
