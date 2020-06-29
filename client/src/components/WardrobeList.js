import React from 'react';
import PropTypes from 'prop-types';
import './WardrobeList.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { listWardrobe, createWardrobe } from '../api/wardrobe.js'
import {listPosts, createPost} from '../actions/wardrobe-actions.js';
import WardrobeItem from './WardrobeItem.js'
import {connect} from 'react-redux';


class WardrobeList extends React.Component {
    static propTypes = {
        lists: PropTypes.array,
        filter: PropTypes.array
    };

    constructor(props) {
        super(props);
        // this.state = {
        //     posts: []
        // }
        // this.handleCreateWardrobe = this.handleCreateWardrobe.bind(this);
    }

    componentDidMount() {
        console.log('mount')
        this.props.dispatch(listPosts(this.props.filter));
    }

    componentWillUnmount() {

    }

    componentWillReceiveProps(nextProps) {
        if (JSON.stringify(nextProps.filter) != JSON.stringify(this.props.filter)) {
            // this.listWardrobe(nextProps.filter);
            this.props.dispatch(listPosts(nextProps.filter));
        }
    }

    render() {
        let {expanded, posts} = this.props;
        if(!posts) posts = [];
        // let children = this.state.posts.map(p =>(
        //     <ListGroupItem>
        //         <Wardrobe_item {...p} expanded={expanded}/>
        //     </ListGroupItem>
        // ));
        let contentClass = expanded ? 'open' : '';
        let children = posts.map(p =>(
            // <div className={`${contentClass}`}>
                <ListGroupItem className={`list-group-item-${contentClass}`}>
                    <WardrobeItem {...p} expanded={expanded}/>
                </ListGroupItem>
            // </div>
        ));
        return (
            <div>
                <ListGroup className='inline-grid'>{children}</ListGroup>
            </div>
        );
    }

    // listWardrobe(searchText) {
        
    //     listWardrobe(searchText).then(posts => {
    //         this.setState({
    //             posts
    //         });
    //     }).catch(err => {
    //         console.error('Error listing', err);

    //         this.setState({
    //             posts: []
    //         });
    //     });
        
    //     console.log(this.state.posts)
    // }

    // handleCreateWardrobe(id, tags) {
    //     createWardrobe(id, tags).then(() => {
    //         this.listWardrobe(this.props.filter);
    //     }).catch(err => {
    //         console.error('Error creating', err);
    //     });
    // }
}

export default connect(state => ({
    posts: state.item.item,
    filter: state.filter
}))(WardrobeList);
