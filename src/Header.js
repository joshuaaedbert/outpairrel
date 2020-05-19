import React, { Component } from "react";
//import Nav from "react-strap/Nav";
//import Form from "react-bootstrap/Form";
// import Navbar from 'react-bootstrap/Navbar'
//import { Button, Navbar } from "react-bootstrap";
//import FormControl from "react-bootstrap/FormControl";
//import Dropdown from "react-bootstrap/Dropdown";
//import { Link } from 'react-router-dom'

export default class Header extends Component {
	state = {};

	render() {
		return (
			// <Navbar bg="light" expand="lg">
			// 	<Navbar.Brand href="/ecommerce-app">
			// 		GadgetZone
			// 	</Navbar.Brand>
			// 	<Navbar.Toggle aria-controls="basic-navbar-nav" />
			// 	<Navbar.Collapse id="basic-navbar-nav">
			// 		<Nav className="mr-auto">
			// 			<Nav.Link href="/ecommerce-app">Home</Nav.Link>
			// 			<Nav.Link href="#link">Link</Nav.Link>
			// 	<Dropdown>
			// 		<Dropdown.Toggle id="dropdown-basic">
			// 			Category
			// 		</Dropdown.Toggle>

			// 		<Dropdown.Menu>
			// 			<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
			// 			<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
			// 			<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
			// 		</Dropdown.Menu>
			// 	</Dropdown>
			// 		</Nav>
			// 		<Form inline>
			// 			<FormControl
			// 				type="text"
			// 				placeholder="Search"
			// 				className="mr-4"
			// 			/>
			// 			<Button variant="outline-success">Search</Button>
			// 		</Form>
			// 	</Navbar.Collapse>
			// </Navbar>
			<nav className="nav-wrapper">
                <div className="container">
                    {/* <Link to="/" className="brand-logo">Shopping</Link> */}
                    <h1> OutPairrel </h1>
                    
                    <ul className="right">
                        {/* <li><Link to="/">Shop</Link></li> */}
                        {/* <li><Link to="/cart">My cart</Link></li> */}
                        {/* <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li> */}
                        <li>Shop</li>
                        <li>My cart</li>
                        <li><i className="material-icons">shopping_cart</i></li>
                    </ul>
                </div>
            </nav>  
		);
	}
}
