const mongoose = require("mongoose");
config = require("./config/local");

const fileUpload = require("./routes/fileUpload");
const upload = require("express-fileupload");
const express = require("express");
const app = express();
const cors = require("cors");
const port = config.port;
var corsOptions = {
	origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello World!");
});
app.use(upload());
app.use("/", fileUpload);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

console.log(config.mongoURI);
mongoose
	.connect(config.mongoURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("MongoDb is connected"))
	.catch((err) => console.log(err));
