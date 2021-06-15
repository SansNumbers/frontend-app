import React from 'react';
import axios from 'axios';
import '../../App.css';
import './Users.css';
import { Link } from 'react-router-dom';

export default class PersonList extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  render() 
  {
    return(
      <>
      <div class="box--container-wrapper">
        <h1>Users </h1>
       
        <div class="box--container">
        {
          this.state.users.map((person, ind) =>{
            const url = "/users/" + person.id
            return (
              <div class={"boxes"}>

                <div class="login" key={ind}>Login: {person.login}</div>
                <div class="name" key={ind}>Name: {person.name}</div>
                <div class="rating" key={ind}>Rating: {person.rating}</div>
                <div class="avatar" key={ind}> 
                  <img  class="avatarpic" src={'http://localhost:8000/' + person.avatar} alt="Image not found" />
                </div>
                <span><Link to={url}>Go to User</Link></span>
              </div>
            );
          })
        }
        </div>
      </div>
      </>
    );
  }
}
