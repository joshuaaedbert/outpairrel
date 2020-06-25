import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  Button,
} from 'reactstrap';
import Home from './components/Home';
import Discover from './components/Discover';
import Style from './components/Style';
import Wardrobe from './components/Wardrobe';
import ProductQuery from './components/ProductQuery';
import Post from './components/Post';
import Tags from './components/Tags';

import './App.css';
import Photo from './components/Photo';

export default class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //   }
  // }

  render() {
    return (
      <Router>
        <div className="App bg-faded">
          <Navbar className="navbar fixed-top bg-secondary">
            <NavbarBrand className="text-white" href="/">
              Outpairrel
            </NavbarBrand>
            <Nav>
              <NavItem>
                <NavLink className="text-white" tag={Link} to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" tag={Link} to="/discover">
                  Discover
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" tag={Link} to="/style">
                  Style
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" tag={Link} to="/wardrobe">
                  Wardrobe
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" tag={Link} to="/photo">
                  New Post
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
        <div className="pages">
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/discover" render={() => <Discover />} />
          <Route exact path="/style" render={() => <Style />} />
          <Route exact path="/wardrobe" render={() => <Wardrobe />} />
          <Route exact path="/product_query" render={() => <ProductQuery />} />
          <Route exact path="/tags" render={() => <Tags />} />
          <Route exact path="/photo" render={() => <Photo />} />
          <Route exact path="/post/:id" component={Post} />
        </div>
      </Router>
    );
  }
}
