import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
	state = {};
	render() {
		return (
			<div className="footer">
				<div class="footer-grid-container">
					<div class="footer-grid-item">
						<h4>SHOP</h4>
						<h5>By Category </h5>
						<ul>
							<li>
								<h6>blabla</h6>
							</li>
							<li>
								<h6>blabla</h6>
							</li>
						</ul>
					</div>
					<div class="footer-grid-item">
						<h4>CONTACT US</h4>
						<h5>Email </h5>
						<ul>
							<li>
								<h6>blabla</h6>
							</li>
						</ul>
						<h5>Telephone</h5>
						<ul>
							<li>
								<h6>blabla</h6>
							</li>
						</ul>
						<h5>Address</h5>
						<ul>
							<li>
								<h6>台灣新竹市光復路二段101號</h6>
							</li>
						</ul>
					</div>
					<div class="footer-grid-item"></div>
				</div>
				<p class="brand-name">Gadget Zone 2020</p>
			</div>
		);
	}
}
