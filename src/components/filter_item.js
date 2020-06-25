import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './filter_item.css'

export default class Wardrobe_item extends Component {
    static propTypes = {
        text: PropTypes.string
    }

    constructor(props){
        super(props);

        this.handleClear = this.handleClear.bind(this);
    }
    render() {
        const {text} = this.props;
        return (
            <div>
                <div className='filter-item d-flex flex-row justify-content-between align-items-center'>
                    <span style={{color: 'black', left: '0.5rem'}}>{text}<span style={{width: '20px', right: '0.25rem', position: 'absolute', fontSize: '18px'}} className='fa fa-times text-primary' onClick={() => this.handleClear(text)}>x</span></span>
                </div>
            </div>
        )
    }

    handleClear(text){
        this.props.handleClear(text)
    }
}