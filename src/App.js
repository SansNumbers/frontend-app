import React from 'react';
import Navbar from './components/Base/Navbar';

import './App.css';

import myProfile from './components/Home/myProfile';
import Users from './components/Users/Users';
import Profile from './components/Users/singleUser';

import NotFound from './components/Home/homePage';

import Posts from './components/Posts/Posts';
import createPost from './components/Posts/createPost';

import Categories from './components/Categories/Categories';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Footer from './components/Base/Footer';

import {Login, Registration, passwordReset, forgotPassword } from './components/Auth/Login';

import Post from './components/Posts/singlePost';

import Logout from './components/Auth/Logout';
import Category from './components/Categories/singleCategory';
import Home from './components/Home/homePage';

function App() {

  return (
    <>
    <Router>
      <Navbar />
        <Switch>


          <Route path='/' exact component = {Home} />

          <Route path='/createPost' exact component = {createPost} />

          <Route path='/login' exact component = {Login} />
          <Route path='/password-reset' exact component = {passwordReset} />
          <Route path='/password-reset/:token' exact component = {forgotPassword} />
          <Route path='/register' exact component = { Registration } />
          <Route path='/logout' exact component = {Logout} />


          <Route path='/users' exact component = {Users} />
          <Route path='/users/:id' component = {Profile} />

          <Route path='/posts' exact component = {Posts} />
          <Route path='/posts/:id' component = {Post} />

          <Route path='/categories' exact component = {Categories} />
          <Route path='/categories/:id' component = {Category} />

          <Route path='/myProfile' exact component = {myProfile} />

          <Route component={NotFound} />
          
        </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
