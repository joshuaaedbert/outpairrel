import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './wardrobeItem.css'

export default class WardrobeItem extends Component {
    static propTypes = {
        id: PropTypes.number,
        tags: PropTypes.array,
    }

    constructor(props){
        super(props);
    }
    render() {
        const {id, tags , expanded} = this.props;
        let contentClass = expanded ? 'open' : '';
        return (
            <div>
                <div className={`item ${contentClass}`}>
                    {/* <span className = {contentClass}>
                    </span> */}
                    {/* <span className='text'>{id}</span> */}
                    {/* <span className='rectangle'><img className='img' src={`image/${id[1]}.png`}/></span>
                    <span className='rectangle'></span>
                    <span className='rectangle'></span> */}
                    <span className='rectangle'><img className='img' src={`image/${id}.png`}/></span>
                    {/* {console.log('id: ' + tags)} */}
                </div>
            </div>
        )
    }
}