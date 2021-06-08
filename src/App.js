import React from 'react';
import NavbarElements from './components/NavbarElements';
import index from './components/index'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Nav />
    </Router>
  );
}

export default App;
