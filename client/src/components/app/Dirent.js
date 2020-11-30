// React
import React from 'react'
import { Link } from 'react-router-dom'
// Bootstrap
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Folder, FileEarmarkText, Arrow90degUp, FileArrowDown, Trash } from 'react-bootstrap-icons'
// File saver
import { saveAs } from 'file-saver'


/*
	Process the dirs and files displaying them on cards
*/

const DirCard = ( props ) => {

	const iconStyle = { color: '#2681ff', size: 30 }
	let icon = <FileEarmarkText {...iconStyle} />

	if ( props.isDirectory ) {
		icon = <Folder {...iconStyle} />
	}
	if ( props.parentDirectory ) {
		icon = <Arrow90degUp {...iconStyle} />
	}

	const path = props.path ? `${props.path}-${props.name}` : props.name
	const downloadLink = `${process.env.REACT_APP_API_URL}/download/${path}`
	const deleteLink = `${process.env.REACT_APP_API_URL}/delete/${path}`

	return (
		<Card>
			<Card.Body>
				<Container>
					<Row>

						<Col xs={props.isDirectory ? '' : 8} style={{ padding: 0 }}>
							<Card.Text
								style={{
									textOverflow: 'ellipsis',
									overflow: 'hidden',
									whiteSpace: 'nowrap',
									color: 'black',
								}}
							>
								{icon} {props.name}
							</Card.Text>	
						</Col>

						{props.isDirectory ? (<></>) : (
							<Col
								style={{ padding: 0, cursor: 'pointer' }}
								className="d-flex flex-row-reverse"
								onClick={() => saveAs(downloadLink, props.name)}
							>
								<FileArrowDown {...iconStyle} />
							</Col>
						)}

						{props.isDirectory ? (<></>) : (
							<Col
								style={{ padding: 0, cursor: 'pointer' }}
								className="d-flex flex-row-reverse"
								onClick={() => saveAs(deleteLink, props.name)}
							>
								<Trash {...iconStyle} />
							</Col>
						)}
						
					</Row>
				</Container>
			</Card.Body>
		</Card>
	)
}

const DirLink = ( props ) => {

	if ( !props.isDirectory) {
		return <>{props.children}</>
	}

	let link = `/content/${props.name}`

	if ( props.path ) {
		link = `${props.path}-${props.name}`
	}
	
	if ( props.parentDirectory ) {
		link = link.split('-').slice(0, -2).join('-') || '/content/'
	}

	return (
		<Link to={link} style={{ textDecoration: 'none' }} className="text-light">
			{props.children}
		</Link>
	)
}

const Dirent = ( props ) => {
	if ( !props.path && props.parentDirectory ) {
		return <></>
	}

	return (
		<Col lg={4} xl={3} className="mt-2">
			<DirLink {...props}>
				<DirCard {...props} />
			</DirLink>
		</Col>
	)
}

export default Dirent
