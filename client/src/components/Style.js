import React, { useState, useEffect } from 'react';
import './Style.css';
import { Button, NavItem, NavLink } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PostItem from './PostItem';
import { listPosts } from '../api/posts';

function Style() {
  // const posts = useSelector((state) => state.posts.posts);
  const [posts, updatePosts] = useState([]);
  
  useEffect(() => {
    listPosts().then(posts => {
      updatePosts(posts);
    })
  })

  let children = (
    <ListGroupItem className="empty d-flex justify-content-center align-items-center">
      <div className="empty-text">The End.</div>
    </ListGroupItem>
  );
  if (posts.length) {
    children = posts.map((post) => (
      <ListGroupItem key={post.id}>
        <PostItem
          id={post.id}
          photo={post.photo}
          like={post.like}
        />
      </ListGroupItem>
    ));
  }

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
          <ListGroup>{children}</ListGroup>
        </div>
      </div>
    </div>
  );
}

export default Style;
