import React from 'react';
import Navbar from './components/Base/Navbar';
import { Link, useParams, useHistory } from 'react-router-dom'

import './App.css';

import Profile from './components/Home/Profile';

import Users from './components/Users/Users';

import Posts from './components/Posts/Posts';
import createPost from './components/Posts/createPost';

import Categories from './components/Categories/Categories';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/Base/Footer';

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import passwordReset from './components/Auth/passwordReset';

function App() {

  return (
    <>
    <Router>
      <Navbar />
        <Switch>


          <Route path='/' exact component = {Posts} />
          <Route path='/createPost' exact component = {createPost} />

          <Route path='/login' exact component = {Login} />
          <Route path='/password-reset' exact component = {passwordReset} />
          <Route path='/register' exact component = {Register} />

          <Route path='/profile' exact component = {Profile} />
          
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
