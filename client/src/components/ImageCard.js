import React from 'react';
import { Component } from 'react';
import {
    Link
} from 'react-router-dom';

// const ImageCard = (props) => {
// //   const tags = image.tags.split(',');
//   const { id, photo, like } = this.props;
//   return (

//     <div className="max-w-sm rounded overflow-hidden shadow-lg">
//             <img src={photo} alt={id} className="w-full"/>
//             <div className="px-6 py-4">
//                 <div className="font-bold text-purple-500 text-xl-mb-2">
//                    {/* {image.user} */}
//                    <h1> Joshua Edbert </h1>
//                 </div>
//                 <ul> 
//                     {/* <li>
//                         <strong>Views: </strong> {image.views}
//                     </li>
//                     <li>
//                         <strong>Download: </strong> {image.downloads}
//                     </li> */}
//                     <li>
//                         <strong>Likes: </strong> {like}
//                     </li>
//                 </ul>
//             </div>
//             {/* <div className="px-6 py-4">
//                     {tags.map((tag, index) => (
//                 <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
//                 #{tag}
//                 </span>
//                 ))}
//             </div> */}
//         </div>   
//   )
// }

// export default ImageCard;

export default class ImageCard extends Component {
    render() {
        const { id, photo, like } = this.props;
        return (
            <Link to={`/post/${id}`}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg" onClick={this.handleClick}>
                    <img src={photo} alt={id} className="w-full"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-purple-500 text-xl-mb-2">
                            <h1> Joshua Edbert </h1>
                        </div>
                        <ul> 
                            <li>
                                <strong>Likes: </strong> {like}
                            </li>
                        </ul>
                    </div>
                </div>   
            </Link>
        );
    }
}
