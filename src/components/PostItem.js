import React, { Component } from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Link 
} from 'react-router-dom';
import Post from './Post';
import './PostItem.css';

export default class PostItem extends Component {
    // constructor(props) {
    //     super(props);
    //     this.handleClick = this.handleClick.bind(this);
    // }
    render() {
        const {id, photo, like} = this.props;
        return (
            <Router>
                <Link to={'post'}>
                    <div className="article d-flex justify-content-center" onClick={this.handleClick}>
                        <div>
                            <img src={photo} alt={id} />
                            <h6>{like} likes</h6>
                        </div>
                    </div>
                </Link>
            </Router>
        );
    }
}