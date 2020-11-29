const { manageErr } = require('./manageError')

/*
	FILE or DIRECTORY does NOT exists
*/
const missed = ( err, req, res, next ) => {

	manageErr( err, {
		code: 'MISSED',
		message: 'File or directory does not exist',
		statusCode: 400,
	})

	next( err )
}

module.exports = missed