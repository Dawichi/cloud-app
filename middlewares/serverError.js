/*
    Internal server error
*/
const serverError = ( err, req, res, next ) => {

	console.log( err )

	res.status( err.statusCode || 500 ).json({
		message: err.message,
		success: false
	})
}

module.exports = serverError
