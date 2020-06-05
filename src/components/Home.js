import React from 'react';
import { useSelector } from 'react-redux';
import PostList from './PostList';
import './Home.css';

function Home() {
    const posts = useSelector(state => state.posts);
    return (
        <div classname="posts">
            <PostList posts={posts} />
        </div>
    )
}

export default Home;