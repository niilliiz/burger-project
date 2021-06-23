import React, { Component } from "react";
import Button from "../../../components/UI/Button/button";
import Classes from "./contactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/spinner/spinner";

class ContactData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: {
        street: "",
        postalCode: "",
      },
      loading: false,
    };
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      custumor: {
        name: "Nilou V",
        addres: {
          street: "allame",
          zipCode: "123-456",
          country: "Canada",
        },
        email: "nilou@mail.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  };
  render() {
    // console.log(this.props);
    let form = (
      <form>
        <input
          className={Classes.Input}
          type="text"
          name="name"
          placeholder="your name"
        />
        <input
          className={Classes.Input}
          type="email"
          name="email"
          placeholder="your email"
        />
        <input
          className={Classes.Input}
          type="text"
          name="street"
          placeholder="street"
        />
        <input
          className={Classes.Input}
          type="text"
          name="postal"
          placeholder="postal code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={Classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
