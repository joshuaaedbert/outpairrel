import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, Collapse, Container, Button, Input } from 'reactstrap';
import './Wardrobe.css'
import WardrobeList from './WardrobeList.js';
import { Row, Col } from 'reactstrap';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './react-sidenav.css'
import FilterList from './FilterList.js'
import { connect } from 'react-redux';
import { setfilters } from '../actions/wardrobe-actions';

class Wardrobe extends Component {

    static propTypes = {

    }

    constructor(props) {
        super(props);
        this.state = {
            lists: [['Hoodie', 'hoodie', 'none', 'none'],
            ['Shirt', 'none', 'none', 'none'],
            ['Jacket', 'none', 'none', 'none'],
            ['Sweatshirts', 'none', 'none', 'none'],
            ['T-shirts', 'none', 'none', 'none'],
            ['Dress', 'none', 'none', 'none'],
            ['Shorts', 'none', 'none', 'none'],
            ['Trousers', 'none', 'none', 'none'],
            ['Shoes', 'none', 'none', 'none']],
            buttonToggle: false,
            searchText: []
        }

        this.searchEl = null;
        this.handleSearchKeyPress = this.handleSearchKeyPress.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClearSearch = this.handleClearSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    componentWillReceiveProps(nextProps) {
    }

    render() {
        const {filter} = this.props
        let sidebarClass = this.state.buttonToggle ? 'sidebar-open' : 'sidebar';
        console.log(this.state.searchText)
        // console.log('item: ' + item)
        return (
            <div>
                {/* <h1 className="text-warning">WARDROBE</h1> */}
                <div className='w-lists'>
                    <SideNav onToggle={this.handleClick}>
                        <SideNav.Toggle />
                        <Collapse isOpen={this.state.buttonToggle}>
                            <div className='search'>
                                <Input type='text' innerRef={this.searchEl} placeholder='Search' onKeyPress={this.handleSearchKeyPress} innerRef={e => this.searchEl = e} 
                                ></Input>
                                {
                                    this.state.searchText.length >= 1 &&
                                    <i className='navbar-text fa fa-times' onClick={this.handleClearSearch}></i>
                                }
                            </div>
                            <FilterList filter={filter} handleClear={this.handleClear} />
                        </Collapse>
                    </SideNav>
                    <WardrobeList className='wardrobe-list' lists={this.state.lists} filter={filter} expanded={this.state.buttonToggle} />
                </div>
            </div>
        )
    }



    handleClick() {
        this.setState((prevState, props) => ({
            buttonToggle: !prevState.buttonToggle
        }));
    }

    handleSearchKeyPress(e) {
        const {filter} = this.props;
        // var a = [...this.state.searchText];
        var a = [...filter];
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
            //     if(!this.state.searchText.some(el => el === e.target.value.toLowerCase())){
            //     this.setState({
            //         searchText: [e.target.value.toLowerCase(), ...a]
            //     });
            //     this.props.dispatch(setfilters([e.target.value.toLowerCase(), ...a]))
            // }
            if (!filter.some(el => el === e.target.value.toLowerCase())) {
                this.props.dispatch(setfilters([e.target.value.toLowerCase(), ...a]))
            }
            this.searchEl.value = '';
        }

    }

    handleClearSearch() {
        const {filter} = this.props;
        // this.setState({
        //     searchText: this.state.searchText.filter(text => {
        //         return text !== this.searchEl.value
        //     })
        // })
        this.props.dispatch(setfilters(filter.filter(text => {
                    return text !== this.searchEl.value
                })))
        this.searchEl.value = '';
    }

    handleClear(text) {
        const {filter} = this.props;
        // console.log('text: ' + text)
        // this.setState({
        //     searchText: this.state.searchText.filter(tags => {
        //         return tags !== text
        //     })
        // })
        this.props.dispatch(setfilters(filter.filter(tags => {
            return  tags !== text
        })))
    }
}

export default connect(state => ({
    filter: state.filter
}))(Wardrobe);