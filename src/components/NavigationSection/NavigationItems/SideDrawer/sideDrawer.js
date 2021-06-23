import React from "react";
import Logo from "../../../Logo/logo";
import Classes from "./sideDrawer.module.css";
import NavigationItems from "../navigationItems";
import Backdrop from "../../../UI/BackDrop/backdrop";
import Aux from "../../../../HOC/Aux/Aux";

const sideDrawer = (props) => {
  let attachedClasses = [Classes.SideDrawer, Classes.Close];
  if (props.open) {
    attachedClasses = [Classes.SideDrawer, Classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={Classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
