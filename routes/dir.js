const router = require('express').Router()
const fs = require('fs')
const path = require('path')

const processPath = require('../lib//processPath')


/*
	POST method - Creates a directory
*/
router.post('/:path?', async ( req, res, next ) => {
	
	const processedDir = processPath( req.params.path )
	const name = req.body.name

	if ( !name ) {
		return res.status( 400 ).json({
			success: false,
			message: 'No name was specified',
		})
	}

	try {

		await fs.promises.mkdir( path.join( processedDir.absolutePath, name ) )

	} catch ( err ) {
		return next( err )
	}

	res.json({ success: true, message: 'Directory created' })
})

module.exports = router