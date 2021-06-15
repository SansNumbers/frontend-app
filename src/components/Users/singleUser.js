import React from 'react';
import axios from 'axios';
import '../../App.css';
import { Link } from 'react-router-dom';

export default class Profile extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: [],
      userId: props.match.params.id
    }
  }
 
  async componentDidMount() {
      axios.get(`http://127.0.0.1:8000/api/users/` + this.state.userId)
      .then(res => {
        const user = res.data;
        this.setState({ user });
      })
  }

  render() 
  {
    return(
      <>
      <div class="box--container-wrapper">
        <h1>User info : {this.state.user.name}</h1>
        <div class="box--container">
          <div class={"boxes"}>
            <div class="author">Login: {this.state.user.login}</div>
            <div class="rating">Email: {this.state.user.email}</div>
            <div class="rating">Rating: {this.state.user.rating}</div>
            <div class="avatar">
              <img  class="avatarpic" src={'http://localhost:8000/' + this.state.user.avatar} alt="Image not found" />
            </div>
          </div>
          </div>
        </div>
      </>
    );
  }
}
