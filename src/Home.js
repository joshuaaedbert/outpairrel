import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

export default class Home extends Component {
    state = {

    }

    render () {
        return (
            <div>
                <Header />
                    <h1> Home! </h1>
                <Footer />
            </div>
        )
    }
}