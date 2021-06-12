import React from 'react';
import axios from 'axios';
import '../../App.css';

export default class Categories extends React.Component {
  state = {
    categories: []
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/categories`)
      .then(res => {
        const categories = res.data;
        this.setState({ categories });
      })
  }

  render() 
  {
    return(
      <>
      <div class="box--container-wrapper">

      <h1>Categories</h1>
      <div class="box--container">
        {
          this.state.categories.map((categories, index) =>{
            return(
              <div class={"boxes"}>
                <div class="title" key={index}>Title: {categories.title}</div>
                <div class="description" key={index}>Description: {categories.description}</div>
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
