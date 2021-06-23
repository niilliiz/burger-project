import React, { Component } from "react";
import classes from "./modal.module.css";
import Aux from "../../../HOC/Aux/Aux";
import BackDrop from "../BackDrop/backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextprops, nextState) {
    return (
      nextprops.show !== this.props.show ||
      nextprops.children !== this.props.children
    );
  }
  componentWillUpdate() {
    console.log("Modal will update");
  }

  render() {
    return (
      <Aux>
        <BackDrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
