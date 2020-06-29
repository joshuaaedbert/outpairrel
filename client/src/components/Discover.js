import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import '../assets/main.css'
import ImageCard from './ImageCard.js'
import ImageSearch from './ImageSearch';
import { useSelector } from 'react-redux';

function Discover() {
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('');
    const posts = useSelector(state => state.posts.posts);

    let filters = [term];
    let post = posts;
    if (posts.length > 0 && term) {
        post = posts.filter(p => {
            return p.tags[0][0].tags.includes(term)
        });
    }

    return (
        <div className="container mx-auto">
            <ImageSearch searchText={(text) => setTerm(text)} />
            
            <div className="grid grid-cols-3 gap-4">
                {post.map(post => (
                    <ImageCard id={post.id} photo={post.photo} like={post.like} /> //id={post.id} photo={post.photo} like={post.like}
                ))}
            </div>

            <h1 className="font-serif text-lg text-gray-800 text-center mx-auto mt-10 mb-10"> Outpairrel 2020 </h1>
        </div>

    )
}

export default Discover;