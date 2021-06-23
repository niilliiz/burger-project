import React from "react";
import Classes from "./toolbar.module.css";
import Logo from "../../Logo/logo";
import NavigationItems from "../NavigationItems/navigationItems";
import DrawerToggle from "../NavigationItems/SideDrawer/DrawerToggle/drawerToggle";
const toolbar = (props) => (
  <header className={Classes.Toolbar}>
    <DrawerToggle clicked={props.drawertoggledClicked} />

    <div className={Classes.Logo}>
      <Logo />
    </div>
    <nav className={Classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
