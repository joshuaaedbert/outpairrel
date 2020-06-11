import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import '../assets/main.css'
//import PostList from './PostList';
import ImageCard from './ImageCard.js'
import ImageSearch from './ImageSearch';

function Discover(){
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('');

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=${'16830910-564b26009cf9c277339526f60'}&q=${term}&image_type=photo&pretty=true`)
          .then(res => res.json())
          .then(data => {
            setImages(data.hits);
            setIsLoading(false);
          })
          .catch(err => console.log(err));
      }, [term]);

    return (
        <div className="container mx-auto">
            <ImageSearch searchText={(text) => setTerm(text)} />

            {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> }

            {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32"> Loading ... </h1> : <div className="grid grid-cols-3 gap-4">
                {images.map(image => (
                    <ImageCard key={image.id} image={image}/>
                ))}
            </div>}

            <h1 className="font-serif text-lg text-gray-800 text-center mx-auto mt-10 mb-10"> Outpairrel 2020 </h1>
        </div>
        
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