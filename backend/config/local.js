const dotenv = require("dotenv");
dotenv.config();

module.exports = {
	mongoURI: process.env.MONGODB_URI,
	dbName: process.env.MONGO_COLLECTION,
	port: process.env.PORT,
};
