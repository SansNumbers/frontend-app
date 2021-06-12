import React from 'react';
import axios from 'axios';
import '../../App.css';
import { Link } from 'react-router-dom';

export default class Posts extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/posts`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }

  render() 
  {
    return(
      <>
      <div class="box--container-wrapper">
        <h1>Posts<button><Link to="/createPost">Make a new post</Link></button></h1>
        <div class="box--container">
          {
            this.state.posts.map((posts, index) =>{
              return (
                  <div class={"boxes"}>
                    <div class="author" key={index}>Author: {posts.author}</div>
                    <div class="rating" key={index}>Rating: {posts.rating}</div>
                    <div class="categories" key={index}>Categories: {posts.categories.value}</div>
                    <div class="title" key={index}>Title: {posts.title}</div>
                    <div class="content" key={index}>Content: {posts.content}</div>
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
