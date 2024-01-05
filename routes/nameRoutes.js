const express = require("express");
const nameRoute = express.Router();

nameRoute.route("/name").get(async (req, res) => {
	try {
		res.status(200).send({
			name: `${req.query.first} ${req.query.last}`,
		});
	} catch (error) {
		res.status(400).send({
			statusCode: 400,
			error: error,
		});
	}
});

module.exports = nameRoute;
