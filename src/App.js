import React from 'react';
import Navbar from './components/Base/Navbar';
import { Link, useParams, useHistory } from 'react-router-dom'

import './App.css';

import Home from './components/Home/Home';

import Users from './components/Users/Users';
import Posts from './components/Posts/Posts';
import Categories from './components/Categories/Categories';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/Base/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';


function App() {

  return (
    <>
    <Router>
      <Navbar />
        <Switch>

          <Route path='/' exact component = {Home} />

          <Route path='/login' exact component = {Login} />
          <Route path='/register' exact component = {Register} />
          
          <Route path='/profile' exact component = {Home} />

          <Route path='/users' exact component = {Users} />
          <Route path='/posts' exact component = {Posts} />
          <Route path='/categories' exact component = {Categories} />
        </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
