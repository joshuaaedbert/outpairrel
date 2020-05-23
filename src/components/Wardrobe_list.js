import React from 'react';
import PropTypes from 'prop-types';

import './Wardrobe_list.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Wardrobe_item from './Wardrobe_item.js'


export default class Wardrobe_list extends React.Component {
    static propTypes = {
        lists: PropTypes.array
    };

    constructor(props) {
        super(props);

    }

    render() {
        const {lists} = this.props;
        
        let children = lists.map(id =>(
            <ListGroupItem>
                <Wardrobe_item id={id}/>
            </ListGroupItem>
        ));
        return (
            <div className='wardrobe-list'>
                <ListGroup>{children}</ListGroup>
            </div>
        );
    }
}
