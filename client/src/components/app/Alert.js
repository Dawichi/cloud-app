// React
import React from 'react'
// Bootstrap
import BpAlert from 'react-bootstrap/Alert'

/*
	A simple alert component to display successful or error messages
*/
const Alert = ( props ) => (

	<BpAlert
		variant={props.alert.success ? 'success' : 'danger'}
		onClose={props.onClose}
		dismissible
	>
		{props.alert.message}
	</BpAlert>
)

export default Alert
