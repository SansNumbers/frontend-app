import React, { Component } from "react";
import Cookies from 'js-cookie';
import axios from "axios";
import { Link } from 'react-router-dom'

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
        login: "",
        email: "",
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
    const { login, email, password } = this.state;
    axios
      .post(
        "http://127.0.0.1:8000/api/auth/login",
        {
            login: login,
            email: email,
            password: password
        },
      )
      .then(response => {
        console.log(response.data);
        this.props.history.push("/profile");
        Cookies.set('token', response.data.token);
      })
      .catch(error => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input
            type="login"
            name="login"
            placeholder="Login"
            value={this.state.login}
            onChange={this.handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Log in</button>
        </form>
        <span>Dont have an account? <Link to="/register">Sing up</Link></span>
      </div>
    );
  }
}