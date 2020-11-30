import React, { Component } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
// Actions
import { loginUser } from "../../actions/authActions"
import classnames from "classnames"
// Bootstrap
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { ArrowLeft, At, Key } from 'react-bootstrap-icons'


class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			errors: {}
		}
	}

	componentDidMount() {
		// If logged in and user navigates to Login page, should redirect them to dashboard
		if (this.props.auth.isAuthenticated) {
			this.props.history.push("/dashboard")
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			this.props.history.push("/dashboard");
		}
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			})
		}
	}

	onChange = e => {
		this.setState({ [e.target.id]: e.target.value })
	}

	onSubmit = e => {
		e.preventDefault()

		const userData = {
			email: this.state.email,
			password: this.state.password
		}

		this.props.loginUser(userData)
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

					<h4><b>Login</b> below</h4>
					<h6>Don't have an account? <Link to="/register">Register</Link></h6>
					<br/>

					<Row>
						<Col>
							<Form noValidate onSubmit={this.onSubmit}>
								<Form.Group>
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
											invalid: errors.email || errors.emailnotfound
										})}
									/>
									<span className="text-danger">
										{errors.email}
										{errors.emailnotfound}
									</span>
								</Form.Group>

								<Form.Group>
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
											invalid: errors.password || errors.passwordincorrect
										})}
									/>
									<span className="text-danger">
										{errors.password}
										{errors.passwordincorrect}
									</span>
								</Form.Group>

								<Button variant="primary" type="submit" size="lg">Login</Button>
							</Form>
						</Col>

						<Col></Col>
					</Row>
				</Container>						
			</>
		)
	}
}

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
})

export default connect(
	mapStateToProps,
	{ loginUser }
)(Login)
