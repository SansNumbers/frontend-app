import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

export default class passwordReset extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    const { password, password_confirmation } = this.state;
    axios
      .post(
        "http://127.0.0.1:8000/api/auth/password-reset" + token,
        {
            password: password,
            password_confirmation: password_confirmation
        },
      )
      .then(response => {
        console.log(response.data);
        this.props.history.push("/login");
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
                type="password"
                name="password"
                placeholder="Enter your new password"
                value={this.state.password}
                onChange={this.handleChange}
                required
            />
            <input
                type="password_confirmation"
                name="password_confirmation"
                placeholder="Confirm your new password"
                value={this.state.password_confirmation}
                onChange={this.handleChange}
                required
            />
          <button type="submit">Set new password</button>
        </form>
      </div>
    );
  }
}
