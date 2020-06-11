import React, { Component } from 'react';
import './Style.css';
import { Button, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Style extends Component {
  render() {
    return (
      <div className="container">
        <div className="flex">
          <div className="styling">
            <Link to="/product_query" style={{ textDecoration: 'none' }}>
              + add clothing
            </Link>
          </div>
          <div
            className="v-line"
            style={{
              border: '2px solid black',
            }}
          ></div>
          <div className="posts">
            <h2>test</h2>
          </div>
        </div>
      </div>
    );
  }
}
