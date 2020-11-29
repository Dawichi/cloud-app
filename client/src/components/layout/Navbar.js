import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Navbar, NavbarBrand, NavItem } from 'react-bootstrap' 
import { CloudFill } from 'react-bootstrap-icons'

class NavBar extends Component {
	render() {
		return (
			<>
			<Navbar>
				<NavbarBrand>
						<CloudFill size="60px" color="#2681ff"/>
				</NavbarBrand>
				<NavItem>
					<Link to="/" >
						<h1>Welcome to MyCloudApp !</h1>
					</Link>
				</NavItem>
			</Navbar>
			</>
		)
	}
}

export default NavBar
