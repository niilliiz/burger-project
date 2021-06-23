import React from "react";
import burgerLogo from "../../assets/img/28.1 burger-logo.png";
import Classes from "./logo.module.css";

const logo = (props) => (
  <div className={Classes.Logo} style={{ height: props.height }}>
    <img src={burgerLogo} alt="burger-logo" />
  </div>
);

export default logo;
