import React, { Component } from 'react';
import './Post.css'

export default class Post extends Component {
    render() {
        const {id, photo, like} = this.props;
        return (
            <div>
                <img src={photo} alt={id}/>
                <h6>{like} likes</h6>
            </div>
        );
    }
}