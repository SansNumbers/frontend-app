import React from 'react';
import axios from 'axios';
import '../../App.css';
import { Link } from 'react-router-dom';

export default class Category extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      category: [],
      categoryId: props.match.params.id
    }
  }


  async componentDidMount() {
    const res = await axios.get(`http://127.0.0.1:8000/api/categories/` + this.state.categoryId)
      const category = res.data;
      this.setState({ category });
  }
  
  render() 
  {
    return(
      <>
      <div class="box--container-wrapper">
        <h1>Category named: {this.state.category.title}</h1>
        
        <div class="box--container">
          <div class={"boxes"}>
            <div class="author">Title: {this.state.category.title}</div>
            <div class="rating">Description: {this.state.category.description}</div>
          </div>
          </div>
        </div>
      </>
    );
  }
}
