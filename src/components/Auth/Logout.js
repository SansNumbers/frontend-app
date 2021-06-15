import React, { Component } from "react";
import Cookies from 'js-cookie';
import axios from "axios";
import { changeScreen } from "../Home/homePage";

export default class Logout extends Component {

  handleSubmit(event) {
    event.preventDefault();
    Cookies.remove('token');
    Cookies.remove('id');
    axios
      .post(
        "http://127.0.0.1:8000/api/auth/logout"
      )
      .then(response => {
        console.log(response.data);

        this.props.history.push("/login");
      })
      .catch(error => {
        console.log("logout error", error);
      });
      changeScreen("/posts")
  }

  render() {
    return (
      <>
        <h1>Hey</h1>
        <div>
          <button onClick = {e => this.handleSubmit(e)}>Logout</button>
        </div>
      </>
    );
  }
}