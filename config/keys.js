/*
	Key to the MongoDB database

	Configure 'name', 'password' and 'cluster' constants to access the database
*/

const name = "dmfajardo"
const password = "abc123.."
const cluster = "MyCloudAppCluster"

module.exports = {
	mongoURI: `mongodb+srv://${name}:${password}@mycloudappcluster.5vlw0.mongodb.net/${cluster}?retryWrites=true&w=majority`,
	secretOrKey: "secret"
}
