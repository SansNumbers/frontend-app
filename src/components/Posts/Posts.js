import React from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

import '../../App.css';

import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

export default class Posts extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      post: [],
    }
  }

  async componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/posts`)
    .then(res => {
      const posts = res.data;
      this.setState({ posts });
    })
  }

  render() 
  {
    console.log(this.state);
    return(
      <>
      <div class="box--container-wrapper">
        <h1>Posts</h1>

          {
          Cookies.get('token') != null &&
            (<Link to={"/createPost"}>
                Make a post
            </Link>)
          }

        <div class="box--container">
        {
          this.state.posts?.map((mapPosts, index) =>{
            const url = "/posts/" + mapPosts.id
            return (
              <div class={"boxes"}>
                <div class="title" key={index}>Title: {mapPosts.title}</div>
                <div class="content" key={index}>Content: {mapPosts.content}</div>
                <div class="rating" key={index}>Rating: {mapPosts.rating}</div>
                <span><Link to={url}>Go to post</Link></span>
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
