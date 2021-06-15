import React from 'react';

import '../../App.css';

export default class Home extends React.Component {
  render() 
  {
    return(
      <>
      <h1>Welcome to main page</h1>
      </>
    );
  }
}

class NotFound extends React.Component{
    render(){
        return <h2>Page not found</h2>;
    }
}

export const changeScreen = (urn) => {
  window.location.href = (urn)
}