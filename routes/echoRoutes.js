const express = require("express");
const logger = require("../middleware/logger");
const echoRoute = express.Router();

echoRoute.get("/:word/echo", async (req, res) => {
	try {
		res.status(200).send({
			echo: req.params.word,
		});
	} catch (error) {
		res.status(404).send({
			statusCode: 400,
			error: error,
		});
	}
});

module.exports = echoRoute;
