const router = require("express").Router();

router.post("/upload", (req, res) => {
	console.log(req.files);
});

module.exports = router;
