/*
	Key to the MongoDB database
*/

module.exports = {
	mongoURI: ${{ secrets.MONGO_URI }},
	secretOrKey: "secret"
}
