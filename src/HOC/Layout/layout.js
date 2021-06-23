import React, { Component } from "react";
import Aux from "../Aux/Aux";
import TooBar from "../../components/NavigationSection/Toolbar/toolbar";
import classes from "./layout.module.css";
import SideDrawer from "../../components/NavigationSection/NavigationItems/SideDrawer/sideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  sideDrawerToggleHadnler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Aux>
        <TooBar drawertoggledClicked={this.sideDrawerToggleHadnler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.content}> {this.props.children} </main>
      </Aux>
    );
  }
}

export default Layout;
