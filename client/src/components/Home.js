import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import PostList from './PostList';
import { listPosts } from '../actions/post-actions'
// import { listPosts } from '../api/posts';
// import getProduct from '../api/products';
import './Home.css';

function Home() {
  // const [posts, updatePosts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listPosts());
    
    // listPosts().then(posts => {
    //   updatePosts(posts);
    // })
  })

  const posts = useSelector(state => state.posts.posts);

  return (
    <div className="posts">
      <PostList posts={posts} />
    </div>
  );
}

export default Home;
// export class Home extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: []
//     }
//   }
  
//   componentDidMount() {
//     listPosts().then(posts => {
//       this.setState({
//         posts: posts
//       })
//     })
//   }

//   componentDidUpdate(prevState) {
//     listPosts().then(posts => {
//       if(posts !== prevState.posts) {
//         this.setState({
//           posts: posts
//         })
//       }
//     })
//   }

//   render() {
//     return (
//       <div className="posts">
//         <PostList posts={this.state.posts} />
//       </div>
//     )
//   }
// }

