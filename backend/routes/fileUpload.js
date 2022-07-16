const { db } = require("../server");

const router = require("express").Router();
const csv = require("csvtojson");
var mongoose = require("mongoose"),
	Schema = mongoose.Schema;
var JSONSchema = new Schema({
	created_at: Date,
	updated_at: Date,
	json: Object,
});

mongoose.model("JSON", JSONSchema);

router.post("/upload", (req, res) => {
	console.log(req.files);
	console.log(req.files.file.data.toString().split("\n")[0]);
	csv()
		.fromString(req.files.file.data.toString())
		.then((jsonObj) => {
			console.log(jsonObj);
			db.collection(req.files.file.name.split(".")[0]);
		});
});

module.exports = router;
