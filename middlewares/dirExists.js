const { manageError } = require('./manageError')

/*
    DIRECTORY already exists
*/
const dirExists = ( err, req, res, next ) => {

	manageError( err, {
		code: 'DIREXISTS',
		message: 'Directory already exists',
		statusCode: 400,
	})
	
	next( err )
}

module.exports = dirExists