import React, { Component } from 'react';
import Footer from './Footer.js';
import Navbar from './components/Navbar.js';

export default class Home extends Component {
    state = {

    }

    render () {
        return (
            <div>
                {/* <Header /> */}
                <Navbar />
                <h1> Home! </h1>
                <Footer />
            </div>
        )
    }
}