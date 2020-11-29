import React, { Component } from "react"
import { Link } from "react-router-dom"
// Bootstrap
import { Container, Button, Row, Col } from 'react-bootstrap' 

class Landing extends Component {
	render() {
		return (
			<>
				<Container fluid>
					<h4>Here you will be able to store all your files organized as you want!</h4>
					<br/><br/><br/>
				</Container>

				<Container fluid>
					<Row>
						<Col>
							<h5>Do you alredy have an account?</h5>
							<Link to="/login">
								<Button size="lg" variant="primary">
									Log In
								</Button>
							</Link>
						</Col>

						<Col>
							<h5>If not, create one. It's free!</h5>
							<Link to="/register">
								<Button size="lg" variant="primary">
									Register
								</Button>
							</Link>
						</Col>
						
						<Col></Col>
					</Row>
				</Container>
			</>
		)
	}
}

export default Landing
