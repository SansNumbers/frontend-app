import React from 'react';
import axios from 'axios';
import '../../App.css';
import { Link } from 'react-router-dom';

export default class Comments extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      post: [],
      user: [],
      postId: props.match.params.id
    }
  }

  async componentDidMount() {
    const res = await axios.get(`http://127.0.0.1:8000/api/posts/` + this.state.postId)
      const post = res.data;
      this.setState({ post });

      axios.get(`http://127.0.0.1:8000/api/posts/` + this.state.postId + `/comments`)
      .then(res => {
        const comments = res.data;
        this.setState({ comments });
      })
  }
  
  render() 
  {
    return(
      <>
      <div class="box--container-wrapper">
        <h1>Post named : {this.state.post.title}</h1>
        <div class="box--container">
          <div class={"boxes"}>
            <div class="author">Author: {this.state.user.login}</div>
            <div class="rating">Rating: {this.state.post.rating}</div>
            {/* <div class="categories">Categories: {this.state.post.categories.value}</div> */}
            <div class="title">Title: {this.state.post.title}</div>
            <div class="content">Content: {this.state.post.content}</div>
          </div>
          </div>
        </div>
      </>
    );
  }
}
