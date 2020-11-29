const path = require('path')
const fs = require('fs')

/*
	moveFile - Moves a recieved file to a recieved directory

	finalPath: adds the file name to the route
    
	returns a promise that warns if the file already exists
	if not, moves the file to 'finalPath'
*/
const moveFile = ( file, storagePath ) => {

	const finalPath = path.join( storagePath, file.name )

	return new Promise( (resolve, reject) => {

		fs.promises.access( finalPath )
			.then( () => reject(new Error(`File ${file.name} already exists`)) )
			.catch( () => file.mv(finalPath, (err) => { err ? reject(err) : resolve() }) )
	})
}

module.exports = moveFile