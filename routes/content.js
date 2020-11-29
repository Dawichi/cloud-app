const router = require('express').Router()
const fs = require('fs')

const processPath = require('../lib/processPath')

/*
	GET method - uploads a directory or a file to the system

	processedDir: process the path by procesPath()
	dir: waits for 'processedDir' and sets the absolutePath
	content: empty array state of server content

*/
router.get('/:path?', async ( req, res, next ) => {

	try {
		const processedDir = processPath( req.params.path )
		const fullDir = await fs.promises.opendir( processedDir.absolutePath )
		const content = { files: [], directories: [] }

		for await (const input of fullDir) {
			// Input can be a directory or a file
            // if it's a dir, pushes it to directories[]. If not, pushes it to files[].
			input.isDirectory() ? content.directories.push( input.name ) : content.files.push( input.name )
		}

		content.directories.sort()
		content.files.sort()

		res.json({ path: processedDir.relativePath, content, success: true })
	
	} catch ( err ) {
		next( err )
	}
})

module.exports = router