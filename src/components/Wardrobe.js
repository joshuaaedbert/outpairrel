import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'reactstrap';
import './Wardrobe.css'
import Wardrobe_list from './Wardrobe_list';

export default class Wardrobe extends Component {

    static propTypes = {
        
    }

    constructor(props) {
        super(props);
        this.state={
            lists: [['Hoodie','hoodie','none','none'],
            ['Shirt','none','none','none'],
            ['Jacket','none','none','none'],
            ['Sweatshirts','none','none','none'],
            ['T-shirts','none','none','none'],
            ['Dress','none','none','none'],
            ['Shorts','none','none','none'],
            ['Trousers','none','none','none'],
            ['Shoes','none','none','none']]
        }
    }

    componentDidMount(){

    }

    componentWillUnmount(){

    }

    componentWillReceiveProps(nextProps){

    }
    render() {
        return (
            <div>
                {/* <h1 className="text-warning">WARDROBE</h1> */}
                <div className='w-lists'>
                    <Wardrobe_list lists={this.state.lists}/>
                </div>
            </div>
        )
    }
}