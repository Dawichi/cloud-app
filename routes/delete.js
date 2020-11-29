const router = require('express').Router()
const fs = require('fs')

const processPath = require('../lib/processPath')

/*
    Deletes a file
*/
router.get('/:path', ( req, res, err ) => {

    const file = processPath( req.params.path ).absolutePath

    try {
        fs.unlinkSync( file )
        console.log("Successfully deleted the file.")

    } catch ( err ) {
        next( err )
    }
})

module.exports = router