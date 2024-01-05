const express = require("express");
const logger = require("../middleware/logger");
const echoRoute = express.Router();

echoRoute.get("/:word/echo", (req, res) => {
	res.status(200).send({
		echo: req.params.word,
	});
});

module.exports = echoRoute;
