import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PostList from './PostList';
import './Home.css';
import getProduct from '../api/products';

function Home() {
  useEffect(function() {
    getProduct()
  }, [])
  const posts = useSelector(state => state.posts.posts);
  return (
    <div className="posts">
      <PostList posts={posts} />
    </div>
  );
}

export default Home;
