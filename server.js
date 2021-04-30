const express = require("express");
const router = require('./routers/recipeRouter');

const server = express();
server.use(express.json())
server.use('/recipes', router);

server.get('/', (req, res, next) => {
	res.status(200).json({
		message: 'no worries, we are online'
	})
})

server.use((err, req, res, next) => {
	console.log(err)

	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server;