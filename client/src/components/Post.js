import React from 'react';
import './Post.css'

function Post({ match }) {
    console.log(match);
    return (
        <h1 className="text-primary">id: {match.params.id}</h1>
    )
}

export default Post;