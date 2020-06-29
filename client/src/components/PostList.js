import React, { Component } from 'react';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import PostItem from './PostItem';

import './PostList.css';

export default class PostList extends Component {
    render() {
        const {posts} = this.props;
        let children = (
            <ListGroupItem className="d-flex justify-content-center align-items-center">
                <h1 className="font-serif text-lg text-gray-800 text-center mx-auto "> Outpairrel 2020 </h1>
            </ListGroupItem>
        );
        if(posts.length) {
            children = posts.map(post => (
                <ListGroupItem className="d-flex justify-content-center bg-light px-4" style={{
                    "background-color": "none",
                    "border": "none",
                    "position": "center"
                }}>
                    <PostItem id={post.id} photo={post.photo} likes={post.likes} />
                </ListGroupItem>
            ))
        }
        return (
            <div className="post-list">
                <ListGroup>{children}</ListGroup>
            </div>
        );
    }
}