import React, { Component } from 'react';
import PostList from './PostList';
import './Home.css';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postLoading: false,
            posts: []
        }
    }

    componentDidMount() {
        // list posts
    }

    render() {
        return (
            <div>
                <h1 className="text-primary">HOME</h1>
                <PostList posts={this.state.posts} />
            </div>
        )
    }
}