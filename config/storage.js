require('dotenv').config()

const storage = process.env.MYCLOUDAPP_STORAGE

if ( !storage ) {
	console.error( 'MYCLOUDAPP_STORAGE environment variable is not defined' )
	process.exit( 1 )
}

module.exports = storage
