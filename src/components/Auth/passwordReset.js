import React, { Component } from "react";
import Cookies from 'js-cookie';
import axios from "axios";
import { Link } from 'react-router-dom'

export default class passwordReset extends Component {
  constructor(props) {
    super(props);

    this.state = {
        email: ""
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
    const { email } = this.state;
    axios
      .post(
        "http://127.0.0.1:8000/api/auth/password-reset",
        {
            email: email
        },
      )
      .then(response => {
          return "password was sent";
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
            type="email"
            name="email"
            placeholder="Enter your email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Sent reset link</button>
        </form>
        <span>Already have an account? <Link to="/login">Sing in</Link></span>
      </div>
    );
  }
}
