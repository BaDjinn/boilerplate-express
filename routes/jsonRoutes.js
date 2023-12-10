const express = require("express");
const json = express.Router();

const dataPakage = {
	message: "Hello json",
};

json.get("/json", async (req, res) => {
	try {
		res.status(200).json(dataPakage);
		console.log("get /json for dataPakage");
	} catch (error) {
		res.status(404).send({
			statusCode: 400,
			error: error,
		});
	}
});

module.exports = json;
