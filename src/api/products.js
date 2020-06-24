// import axios from 'axios';
import React from 'react';
// const key = '36b99220c9mshc808751dbcee44cp15bb91jsn8b4b792f0418';
// let HennesMauritz = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/regions/list';

function getProduct() {
    let url = "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_all&sortBy=stock&concepts=H%2526M%20MAN&country=us&lang=en&currentpage=0&pagesize=30";
    console.log(`Making GET request to ${url}`);
    fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
            "x-rapidapi-key": "36b99220c9mshc808751dbcee44cp15bb91jsn8b4b792f0418"
        }
    }).then(response => {
        console.log(response);
    }).catch(err => {
        console.log(err);
    });
}

export default getProduct;