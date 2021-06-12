import React, { Component } from "react";
import Cookies from 'js-cookie';
import axios from "axios";
import { Link } from 'react-router-dom'

export default class Login extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
        login: "",
        password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { login, password } = this.state;
    axios
      .post(
        "http://127.0.0.1:8000/api/auth/login",
        {
            login: login,
            password: password
        },
      )
      .then(response => {
        console.log(response.data);
        Cookies.get(response.data);
      })
      .catch(error => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Welcome to your profile</h1>
        
      </div>
    );
  }
}