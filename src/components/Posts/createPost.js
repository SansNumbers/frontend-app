import React, { Component } from "react";
import axios from "axios";
import Select from 'react-select'

import '../../App.css';

export default class createPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
        title: "",
        content: "",
        categories: []
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
    const { title, content, categories } = this.state;
    axios
      .post(
        "http://127.0.0.1:8000/api/posts",
        {
            title: title,
            content: content,
            categories: categories
        },
      )
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("Couldnt create a post", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input
            type="title"
            name="title"
            placeholder="Title of the post"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
          <input
            type="content"
            name="content"
            placeholder="Content of the post"
            value={this.state.content}
            onChange={this.handleChange}
            required
          />
          <Select
            options={this.state.categories}
            type="categories"
            name="categories"
            placeholder="Categories of the post"
            onChange={this.handleChange}
            required
          />
          <button type="submit">Create a post</button>
        </form>
      </div>
    );
  }
}