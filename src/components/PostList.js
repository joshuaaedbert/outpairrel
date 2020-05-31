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
            <ListGroupItem className="empty d-flex justify-content-center align-items-center">
                <div className="empty-text">The End.</div>
            </ListGroupItem>
        );
        if(posts.length) {
            children = posts.map(post => (
                <ListGroupItem key={post.id}>
                    <PostItem id={post.id} photo={post.photo} like={post.like} />
                </ListGroupItem>
            ))
        }
        return (
            <div>
                <ListGroup>{children}</ListGroup>
            </div>
        );
    }
}