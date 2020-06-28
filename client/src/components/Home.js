import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PostList from './PostList';
import getProduct from '../api/products';
import './Home.css';

function Home() {
  // useEffect(() => {
  //   getProduct().then(products => {
  //     console.log(products)
  //   });
  // })
  const posts = useSelector(state => state.posts.posts);
  
  return (
    <div className="posts">
      <PostList posts={posts} />
    </div>
  );
}

export default Home;
