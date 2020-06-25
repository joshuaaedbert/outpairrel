import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PostList from './PostList';
import './Home.css';
import getProduct from '../api/products';

function Home() {
  const [productList, updateProducts] = useState([]);

  useEffect(function() {
    getProduct().then(products => {
      updateProducts(products);
      console.log(products);
    })
  }, []);

  // const posts = useSelector(state => state.posts.posts);
  
  return (
    <div className="posts">
      <PostList posts={productList} />
    </div>
  );
}

export default Home;
