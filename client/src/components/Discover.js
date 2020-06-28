import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import '../assets/main.css'
import ImageCard from './ImageCard.js'
import ImageSearch from './ImageSearch';
import { useSelector } from 'react-redux';

function Discover() {
    // const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('');

    // useEffect(() => {
    //     fetch(`https://pixabay.com/api/?key=${'16830910-564b26009cf9c277339526f60'}&q=${term}&image_type=photo&pretty=true`)
    //       .then(res => res.json())
    //       .then(data => {
    //         setImages(data.hits);
    //         setIsLoading(false);
    //       })
    //       .catch(err => console.log(err));
    //   }, [term]);
    // const [productList, updateProducts] = useState([]);
    const posts = useSelector(state => state.posts.posts);

    // useEffect(function () {
    //     getProduct().then(products => {
    //         updateProducts(products);
    //         setIsLoading(false);
    //         console.log(products);
    //     })
    // }, []);

    return (
        <div className="container mx-auto">
            <ImageSearch searchText={(text) => setTerm(text)} />

            {/* {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> } */}

            {/* {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32"> Loading ... </h1> : } */}
            <div className="grid grid-cols-3 gap-4">
                {posts.map(post => (
                    <ImageCard id={post.id} photo={post.photo} like={post.like} /> //id={post.id} photo={post.photo} like={post.like}
                ))}
            </div>

            <h1 className="font-serif text-lg text-gray-800 text-center mx-auto mt-10 mb-10"> Outpairrel 2020 </h1>
        </div>
        // <h1> hello world </h1>

    )
}

export default Discover;








// export default class Discover extends Component {



//     render() {
//         // const [images, setImages] = useState([]);
//         // const [isLoading, setIsLoading] = useState(true);
//         // const [term, setTerm] = useState('');


//     }

// }