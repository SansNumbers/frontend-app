import React, { Component } from "react";
import Cookies from 'js-cookie';
import axios from "axios";
import { changeScreen } from "../Home/homePage";

import '../../App.css';

import { Link } from 'react-router-dom'

import './Register.css';

export class Login extends React.Component {
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
        Cookies.set('token', response.data.token);
        Cookies.set('id', response.data.user.id);
        // this.props.history.push("/posts");
        changeScreen("/myProfile")
      })
      .catch(error => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
        <input
            type="login"
            name="login"
            placeholder="Login"
            value={this.state.login}
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
          <button  type="submit">Log in</button>
        </form>
        <span>Dont have an account? <Link to="/register">Sign up</Link></span><br></br>
        <span>Forgot password? <Link to="/password-reset">Remind password</Link></span>
      </div>
    );
  }
}

export class Registration extends React.Component {
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
          changeScreen("/login")
      })
      .catch(error => {
        console.log("registration error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div class="reg__form">
        <form onSubmit={e => this.handleSubmit(e)}>
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
        <span>Already have an account? <Link to="/login">Sign in</Link></span>
      </div>
    );
  }
}

export class passwordReset extends React.Component {
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
        console.log(response);
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
        <span>Already have an account? <Link to="/login">Sign in</Link></span>
      </div>
    );
  }
}

export class forgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: props.match.params.token,
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
        `http://127.0.0.1:8000/api/auth/password-reset/${this.state.token}`,
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
