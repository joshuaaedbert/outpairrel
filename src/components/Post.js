import React from 'react';
import './Post.css'
import { useSelector } from 'react-redux';
import ImageCard from './ImageCard.js'

function Post({ match }) {
    console.log(match);
    const posts = useSelector(state => state.posts.posts);

    return (
        //<h1 className="text-primary">id: {match.params.id}</h1>

        // <div className="container py-8">
        //     {posts.map(post => (
        //         post.id == match.params.id ? <ImageCard id={post.id} photo={post.photo} like={post.like} /> : <span></span>
        //         //<ImageCard id={post.id} photo={post.photo} like={post.like} /> 
        //     ))}

        //     <h1 className="font-serif text-lg text-gray-800 text-center mx-auto mt-10 mb-10"> Outpairrel 2020 </h1>
        // </div>
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
                            {posts.map(post => (
                                post.id == match.params.id ? <p> {post.tag} <br></br> {post.price}</p> : <span></span>
                            ))}
                        </span>
                        <span className="block text-gray-700 text-center bg-gray-400 px-4 py-8 mt-2">2</span>
                        <span className="block text-gray-700 text-center bg-gray-400 px-4 py-8 mt-2">3</span>
                    </div>
                </div>
            </div>
            {/* <h1 className="font-serif text-lg text-gray-800 text-center mx-auto mt-10 mb-10"> Outpairrel 2020 </h1> */}
        </div>
        
        
    )
}

export default Post;