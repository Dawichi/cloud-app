// Server imports
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const passport = require("passport")
const cors = require('cors')

// Routes imports
const contentRouter = require('./routes/content')
const deleteRouter = require('./routes/delete')
const dirRouter = require('./routes/dir')
const downloadRouter = require('./routes/download')
const uploadRouter = require('./routes/upload')

// Middlewares imports
const dirExists = require('./middlewares/dirExists')
const missed = require('./middlewares/missed')
const serverError = require('./middlewares/serverError')

// Register and login routes
const users = require("./routes/api/users")

const app = express()

// ---------------------------------------------------------------

// Middlewares
app.use( express.json() )
app.use( cors() )

// Bodyparser middleware
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// DB config
const db = require("./config/keys").mongoURI

// Connect to MongoDB
mongoose
	.connect(
		db,
		{ useNewUrlParser: true }
	)
	.then(() => console.log("MongoDB successfully connected"))
	.catch(err => console.log(err))

// Passport middleware
app.use( passport.initialize() )

// Passport config
require("./config/passport")(passport)

// Routes
app.get( '/', (req, res) => res.send( 'MyCloudApp API' ) )
app.use( '/content', contentRouter )
app.use( '/delete', deleteRouter )
app.use( '/dir', dirRouter )
app.use( '/download', downloadRouter )
app.use( '/upload', uploadRouter )
app.use( '/api/users', users )

// Errors
app.use( missed )
app.use( dirExists )
app.use( serverError )

// Server listen 
const port = process.env.PORT || 5000
app.listen( port, () => console.log(`Server up and running on port ${port} !`) )
