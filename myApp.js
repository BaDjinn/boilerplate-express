const express = require("express");
const app = express();

const jsonRoutes = require("./routes/jsonRoutes");

console.log("Hello World");

//middleware
app.use("/public", express.static(__dirname + `/public`));

//ROUTING
app.use("/json", jsonRoutes);

//inApp routing

app.get("/", async (req, res) => {
	try {
		res.status(200).sendFile(__dirname + `/views/index.html`);
		console.log(`get / for /views/index.html`);
	} catch (error) {
		res.status(404).send({
			statusCode: 200,
			error: error,
		});
	}
});

module.exports = app;
