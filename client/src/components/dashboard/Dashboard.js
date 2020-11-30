import React, { Component } from "react"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom'
import PropTypes from "prop-types"
import { connect } from "react-redux"
// Actions
import { logoutUser } from "../../actions/authActions"
import { Button, Container } from "react-bootstrap"
// APP
import Dir from "../app/Dir"

class Dashboard extends Component {

	onLogoutClick = e => {
		e.preventDefault()
		this.props.logoutUser()
	}

	render() {
		return (
			<>
				<Container fluid>

					<Router>
						<Container className="mt-5">
							<Switch>
								<Route
									path="/content/:path?"
									render={(props) => <Dir key={props.match.params.path} {...props} />}
								/>

								<Route path="/dashboard">
									<Redirect to="/content/" />
								</Route>
							</Switch>
						</Container>
					</Router>
					<hr/>
		
					<Button variant="primary" onClick={this.onLogoutClick} size="lg">Logout</Button>

				</Container>
			</>
		)
	}
}

Dashboard.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	auth: state.auth
})

export default connect(
	mapStateToProps,
	{ logoutUser }
)(Dashboard)