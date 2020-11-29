/*
    Base middleware to manage server-side errors
*/
const manageError = ( err, settings ) => {

	if ( err.code !== settings.code ) return false

	err.message = settings.message
	err.statusCode = settings.statusCode

	return true
}

module.exports = { manageError }