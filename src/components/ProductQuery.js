import React, { Component } from 'react';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';


export default class ProductQuery extends Component {
  

  render() {
    const { products } = this.props;
    let children = (
      <ListGroupItem className="empty d-flex justify-content-center align-items-center">
        <div className="empty-text">The End.</div>
      </ListGroupItem>
    );
    if (products.length) {
      children = products.map((product) => (
        <ListGroupItem key={product.id}>
          <ProductItem id={product.id} photo={product.photo} like={product.like} />
        </ListGroupItem>
      ));
    }
    return (
      <div>
        <ListGroup>{children}</ListGroup>
      </div>
    );
  }
}
