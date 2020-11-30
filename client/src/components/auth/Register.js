import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
// Actions
import { registerUser } from "../../actions/authActions"
import classnames from "classnames"
// Bootrstrap
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { ArrowLeft, At, Key, Person } from 'react-bootstrap-icons'


class Register extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			email: "",
			password: "",
			password2: "",
			errors: {}
		}
	}

	componentDidMount() {
		// If logged in and user navigates to Register page, should redirect them to dashboard
		if (this.props.auth.isAuthenticated) {
			this.props.history.push("/dashboard")
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			})
		}
	}

	onChange = e => {
		this.setState({ [e.target.id]: e.target.value })
	};

	onSubmit = e => {
		e.preventDefault();

		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		}

		this.props.registerUser(newUser, this.props.history)
	}

	render() {
		const { errors } = this.state

		return (
			<>
				<Container fluid>

					<Link to="/">
						<ArrowLeft size="36px" /> Back to home
					</Link>
					<br/><br/>

					<h4><b>Register</b> below</h4>
					<h6>Already have an account? <Link to="/login">Log in</Link></h6>
					<br/>

					<Row>
						<Col>
							<Form noValidate onSubmit={this.onSubmit}>
								<Form.Group controlId="name">
									<Form.Label>
										<Person size="20px"/> Name
									</Form.Label>
									<Form.Control 
										onChange={this.onChange}
										value={this.state.name}
										error={errors.name}
										id="name"
										type="text"
										placeholder="Your name"
										className={classnames("", {
											invalid: errors.name
										})}
									/>
									<span className="text-danger">
										{errors.name}
									</span>
								</Form.Group>

								<Form.Group controlId="email">
									<Form.Label>
										<At size="20px"/> Email
									</Form.Label>
									<Form.Control 
										onChange={this.onChange}
										value={this.state.email}
										error={errors.email}
										id="email"
										type="email"
										placeholder="name@example.com"
										className={classnames("", {
											invalid: errors.email
										})}
									/>
									<span className="text-danger">
										{errors.email}
									</span>
								</Form.Group>

								<Form.Group controlId="password">
									<Form.Label>
										<Key size="20px"/> Password
									</Form.Label>
									<Form.Control 
										onChange={this.onChange}
										value={this.state.password}
										error={errors.password}
										id="password"
										type="password"
										placeholder="* * * * * * * *"
										className={classnames("", {
											invalid: errors.password
										})}
									/>
									<span className="text-danger">
										{errors.password}
									</span>
								</Form.Group>

								<Form.Group controlId="password2">
									<Form.Label>
										<Key size="20px"/> Confirm Password
									</Form.Label>
									<Form.Control 
										onChange={this.onChange}
										value={this.state.password2}
										error={errors.password2}
										id="password2"
										type="password"
										placeholder="* * * * * * * *"
										className={classnames("", {
											invalid: errors.password2
										})}
									/>
									<span className="text-danger">
										{errors.password2}
									</span>
								</Form.Group>

								<Button variant="primary" type="submit" size="lg">Sign up</Button>
							

							</Form>
						</Col>
						
						<Col></Col>
					</Row>
				</Container>
			</>
		)
	}
}

Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
})

export default connect(
	mapStateToProps,
	{ registerUser }
)(withRouter(Register))
