import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
const axios = require("axios");

const fileTypes = ["CSV", "XLSX"];

function DragDrop() {
	const [file, setFile] = useState(null);

	const handleChange = (file) => {
		console.log(file);

		setFile(file);
		const formData = new FormData();

		formData.append("file", file);
		axios

			.post("http://localhost:8000/upload", formData)

			.then((res) => {
				alert("File Upload success");
			})

			.catch((err) => alert("File Upload Error"));
	};

	return (
		<div>
			<FileUploader handleChange={handleChange} name='file' types={fileTypes} />
		</div>
	);
}

export default DragDrop;
