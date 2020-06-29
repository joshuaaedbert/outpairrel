import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

import './PostItem.css';

export default class PostItem extends Component {
    // constructor(props) {
    //     super(props);
    //     this.handleClick = this.handleClick.bind(this);
    // }
    render() {
        const { id, photo, likes } = this.props;
        return (
            <Link to={`/post/${id}`}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto" onClick={this.handleClick}>
                    <div>
                        <img src={photo} alt={id} />
                        <h6 className="likes font-bold text-purple-500 text-xl-mb-2">{likes} likes</h6>
                    </div>
                </div>
            </Link>
        );
    }
}