import React from 'react';
import PropTypes from 'prop-types';

import './Wardrobe_list.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { listWardrobe, createWardrobe } from '../api/wardrobe.js'
import Wardrobe_item from './Wardrobe_item.js'


export default class Wardrobe_list extends React.Component {
    static propTypes = {
        lists: PropTypes.array,
        filter: PropTypes.array
    };

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
        this.handleCreateWardrobe = this.handleCreateWardrobe.bind(this);
    }

    componentDidMount() {
        console.log('mount')
        this.listWardrobe(this.props.filter);
    }

    componentWillUnmount() {

    }

    componentWillReceiveProps(nextProps) {
        if (JSON.stringify(nextProps.filter) != JSON.stringify(this.props.filter)) {
            this.listWardrobe(nextProps.filter);
        }
    }

    render() {
        const {lists, expanded, filter} = this.props;
        
        let children = this.state.posts.map(p =>(
            <ListGroupItem>
                <Wardrobe_item {...p} expanded={expanded}/>
            </ListGroupItem>
        ));
        return (
            <div>
                <ListGroup className='grid'>{children}</ListGroup>
            </div>
        );
    }

    listWardrobe(searchText) {
        listWardrobe(searchText).then(posts => {
            this.setState({
                posts
            });
        }).catch(err => {
            console.error('Error listing', err);

            this.setState({
                posts: []
            });
        });

        console.log(this.state.posts)
    }

    handleCreateWardrobe(id, tags) {
        createWardrobe(id, tags).then(() => {
            this.listWardrobe(this.props.filter);
        }).catch(err => {
            console.error('Error creating', err);
        });

        
    }
}
