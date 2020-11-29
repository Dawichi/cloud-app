const router = require('express').Router()
const fileUpload = require('express-fileupload')

const processPath = require('../lib/processPath')
const moveFile = require('../lib/moveFile')

/*
	POST method - Uploads a file
*/
router.use( fileUpload() )

router.post('/:path?', async ( req, res, next ) => {
  
	if ( !req.files ) {
		return res.status( 400 ).json({
			success: false,
			message: 'No files were uploaded'
		})
	}

	const processedPath = processPath( req.params.path )

	let files = req.files.file
	if ( !Array.isArray( files ) ) return files = [files]


	try {

		for ( const file of files ) {
			await moveFile( file, processedPath.absolutePath )
		}

	} catch ( err ) {

		if (err.code ) return next(err)

		return res.status( 400 ).json({
			success: false,
			message: err.message,
			path: processedPath.relativePath
		})
	}

	res.json({
		success: true,
		message: 'Files successfully uploaded',
		path: processedPath.relativePath
	})
})

module.exports = router