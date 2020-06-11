import React from 'react';
import PropTypes from 'prop-types';

import './filter_list.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Filter_item from './filter_item.js'


export default class Wardrobe_list extends React.Component {
    static propTypes = {
        filter: PropTypes.array
    };

    constructor(props) {
        super(props);
        this.handleClear = this.handleClear.bind(this);
    }

    render() {
        const {filter} = this.props;
        
        let children = filter.map(p =>(
            <ListGroupItem className='filter-list'>
                <Filter_item text={p} handleClear={this.handleClear}/>
            </ListGroupItem>
        ));
        return (
            <div className='filter-list'>
                <ListGroup>{children}</ListGroup>
            </div>
        );
    }

    handleClear(text){
        this.props.handleClear(text);
    }
    
}
