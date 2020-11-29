const path = require('path')
const storage = require('../config/storage')

/*
	processPath - process a directory

	divisor:        selects route divisor depending of the OS
	relativePath:   process the 'slash' divisors replacing them with -
	absolutePath:   adds the relative path to the base route where server is running, got from 'storage' 
*/
const processPath = ( directory ) => {

	const divisor = process.platform === 'win32' ? '\\' : '/'
	const relativePath = directory ? directory.replace(/-/g, divisor) : divisor
	const absolutePath = path.join(storage, relativePath)

	return { relativePath, absolutePath }
};

module.exports = processPath