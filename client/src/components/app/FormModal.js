// React
import React, { useState } from 'react'
// Bootstrap
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

/*
	A simple form made with react-bootstrap 
*/
const FormModal = ( props ) => {

	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	return (
		<>
			<Button variant={props.btn} size="lg" block onClick={handleShow}>
				{props.title}
				{props.icon}
			</Button>

			<Modal show={show} onHide={handleClose}>

				<Modal.Header closeButton>
					<Modal.Title>{props.title}</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					{props.children}
				</Modal.Body>

				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}> Close </Button>
				</Modal.Footer>

			</Modal>
		</>
	)
}

export default FormModal
