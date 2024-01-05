const timeStamp = (req, res, next) => {
	req.time = new Date().toString();
	next();
};

module.exports = timeStamp;
