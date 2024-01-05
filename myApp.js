//dotenv
require("dotenv").config();
//the express package
const express = require("express");
const app = express();
//importing Middleware

const loglog = require("./middleware/logger");
const timeStamp = require("./middleware/timeStamp");
//importing routes
const jsonRoutes = require("./routes/jsonRoutes");
const echoRoute = require("./routes/echoRoutes");
const nameRoute = require("./routes/nameRoutes");
//fancy logs
console.log("Hello World");

//middlewares for Root-level
app.use("/public", express.static(__dirname + `/public`));
app.use(loglog);

//ROUTING
app.use("/", jsonRoutes);
app.use("/", loglog, echoRoute);
app.use("/", loglog, nameRoute);
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
/*----------ripartire da qui sotto!!---------- */
app.get("/now", timeStamp, async (req, res) => {
	res.status(200).send({
		time: req.time,
	});
});

module.exports = app;
