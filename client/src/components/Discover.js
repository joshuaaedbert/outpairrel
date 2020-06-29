import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import '../assets/main.css'
import ImageCard from './ImageCard.js'
import ImageSearch from './ImageSearch';
import { useSelector } from 'react-redux';
import { listPosts } from '../api/posts';

export default class Discover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            posts: []
        }
    }

    componentDidMount() {
        listPosts().then(posts => {
            this.setState({
                posts: posts
            })
        })
    }

    render() {
        let post = this.state.posts;
        console.log(this.state.term)
        if (this.state.posts.length > 0 && this.state.term) {
            post = this.state.posts.filter(p => {
                return p.tags[0].tags.includes(this.state.term)
            });
        }
        return (
            <div className="container mx-auto">
                <ImageSearch searchText={(text) => this.setState({term: text})} />

                <div className="grid grid-cols-3 gap-4">
                    {post.map(post => (
                        <ImageCard id={post.id} photo={post.photo} like={post.likes} /> 
                    ))}
                </div>

                <h1 className="font-serif text-lg text-gray-800 text-center mx-auto mt-10 mb-10"> Outpairrel 2020 </h1>
            </div>
        )
    }
}