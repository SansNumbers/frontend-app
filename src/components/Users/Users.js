import React, {Component} from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import '../../App.css';
import './Users.css';
import { Link } from 'react-router-dom';

export default class PersonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      offset: 0,
      data: [],
      perPage: 12,
      currentPage: 0
    };
    this.handlePageClick = this
    .handlePageClick
    .bind(this);
  }

  receivedData() {
    axios
      .get(`http://127.0.0.1:8000/api/users`)
      .then(res => {

        const users = res.data.data;
        console.log(res);
        const slicing = users.slice(this.state.offset, this.state.offset + this.state.perPage)
        const postData = slicing.map(person => <React.Fragment>
        <div class="box--container">
          <div class={"boxes"}>
            <div class="login">Login: {person.login}</div>
            <div class="name">Name: {person.name}</div>
            <div class="rating">Rating: {person.rating}</div>
            <div class="avatar"> 
              <img  class="avatarpic" src={'http://localhost:8000/' + person.avatar} alt="Image not found" />
            </div>
          {/* <span><Link to={}>Go to User</Link></span> */}
         </div>
        </div>
        </React.Fragment>)

        this.setState({
          pageCount: Math.ceil(users.length / this.state.perPage),
          postData
      })
    });
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.receivedData()
    });
  };

  componentDidMount() {
    this.receivedData()
  }

  render() {
    return(
      <div class="box--container-wrapper">
        <h1>Users </h1>
            {this.state.postData}
            <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}/>
      </div>
    );
  }
}