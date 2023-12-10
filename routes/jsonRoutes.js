const express = require("express");
const json = express.Router();

const dataPakage = {
	message: "Hello json",
};

// json.get("/json", async (req, res) => {
// 	try {
// 		process.env.MESSAGE_STYLE == `uppercase`
// 			? res.status(200).json(dataPakage.message.toUpperCase())
// 			: res.status(200).json(dataPakage);
// 		console.log("get /json for dataPakage");
// 	} catch (error) {
// 		res.status(404).send({
// 			statusCode: 400,
// 			error: error,
// 		});
// 	}
// });

json.get("/json", async (req, res) => {
	try {
		if (process.env["MESSAGE_STYLE"] === "uppercase") {
			res.json(dataPakage.message.toUpperCase());
		} else {
			res.json(dataPakage);
		}
		console.log("get /json for dataPakage");
	} catch (error) {
		res.status(404).send({
			statusCode: 400,
			error: error,
		});
	}
});

module.exports = json;
