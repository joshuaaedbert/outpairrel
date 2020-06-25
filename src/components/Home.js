import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PostList from './PostList';
import './Home.css';
import getProduct from '../api/products';

function Home() {
  // const posts = useSelector(state => state.posts.posts);
  useEffect(function() {
    getProduct().then(products => {
      updateProducts(products);
      console.log(products);
    })
  }, []);

  return (
    <div className="posts">
      <PostList posts={posts} />
    </div>
  );
}

export default Home;
