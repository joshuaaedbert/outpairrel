import React from 'react';
import './Post.css';
import { useSelector } from 'react-redux';
import ImageCard from './ImageCard.js';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';

function Post({ match }) {
    console.log(match);
    const posts = useSelector(state => state.posts.posts);
    console.log(posts)
    let bro = posts.filter(post => {
        return post.id == match.params.id
    })
    console.log(bro)
    let children = (
        <ListGroupItem className="d-flex justify-content-center align-items-center">
            <div className="empty-text">No tags</div>
        </ListGroupItem>
    );

    if(posts.length) {
        children = bro[0].tags.map(tags => (
            <ListGroupItem style={{width: '25rem'}}>
                <img src={tags[0].photo} alt={tags[0].id} style={{width: '5px', height:'5px', paddingRight: '1rem'}}/>
                <span>{tags[0].name}</span>
            </ListGroupItem>
        ))
    }

    return (
        <div>
            <div className="flex mx-auto bg-gray-200">
                <div className="flex-1 text-center px-4 py-8 m-2">      
                    {posts.map(post => (
                        post.id == match.params.id ? <ImageCard id={post.id} photo={post.photo} like={post.like} /> : <span></span>
                    ))}
                </div>
                <div className="vl flex-1 text-center px-4 py-8 m-2"></div>
                <div className="flex-1 text-center px-4 py-8 m-2">
                    <div className="bg-gray-200 p-4">
                        <span className="block text-gray-700 bg-gray-400 px-4 py-2">
                            <ListGroup>{children}</ListGroup>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default Post;