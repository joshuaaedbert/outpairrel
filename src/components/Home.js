import React, { Component } from 'react';
import PostList from './PostList';
import './Home.css';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postLoading: false,
            posts: [
                {
                    id: 0,
                    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/220px-Donald_Trump_official_portrait.jpg',
                    like: 1
                },
                {
                    id: 1,
                    photo: 'https://i.pcmag.com/imagery/reviews/038Dr5TVEpwIv8rCljx6UcF-14.fit_lim.size_640x358.v_1588802180.jpg',
                    like: 75
                },
                {
                    id: 2,
                    photo: 'https://images-na.ssl-images-amazon.com/images/I/71GCTZOZynL._AC_SL1500_.jpg',
                    like: 125
                }
            ]
        }
    }

    componentDidMount() {
        // list posts
    }

    render() {
        return (
            <div className="posts">
                <PostList posts={this.state.posts} />
            </div>
        )
    }
}