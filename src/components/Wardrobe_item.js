import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Wardrobe_item.css'

export default class Wardrobe_item extends Component {
    static propTypes = {
        id: PropTypes.array
    }

    constructor(props){
        super(props);
    }
    render() {
        const {id} = this.props;
        return (
            <div>
                <div className='item d-flex flex-row align-items-center justify-content-between'>
                    <span className='text'>{id[0]}</span>
                    <span className='rectangle'><img className='img' src={`image/${id[1]}.png`}/></span>
                    <span className='rectangle'></span>
                    <span className='rectangle'></span>
                </div>
            </div>
        )
    }
}