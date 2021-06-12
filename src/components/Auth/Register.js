import React, { Component } from "react";
import Cookies from 'js-cookie';
import axios from "axios";
import { Link } from 'react-router-dom'

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
        login: "",
        email: "",
        password: "",
        password_confirmation: ""
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
    const { login, email, password, password_confirmation } = this.state;
    axios
      .post(
        "http://127.0.0.1:8000/api/auth/register",
        {
            login: login,
            email: email,
            password: password,
            password_confirmation: password_confirmation
        },
      )
      .then(response => {
          console.log(response.data);
          Cookies.set('token', response.data.token);
          this.props.history.push("/posts");
      })
      .catch(error => {
        console.log("registration error", error);
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

          <input
            type="password"
            name="password_confirmation"
            placeholder="Password confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
        <span>Already have an account? <Link to="/login">Sing in</Link></span>
      </div>
    );
  }
}
