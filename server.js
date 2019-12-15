const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const db = require("./db/db.json");
const fs = require("fs");

// const id = Math.floor(Math.random() * 100);
let id = 1;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve static files 
app.use(express.static(path.join(__dirname, './public')));


// ========== API ROUTES ==========
app.get("/api/notes", function (req, res) {
	// res.send(path.join(__dirname, './Develop/db/db.json'))
	res.json("It worked!");
});

app.post("/api/notes", function (req, res) {

	let addedNote = JSON.stringify(req.body);
	addedNote = '{' + `"id":${id++},` + addedNote.substr(1);
	let addedNoteJSON = JSON.parse(addedNote);
	console.log('addedNoteJSON', addedNoteJSON);

	fs.readFile('./db/db.json', 'utf8', (err, data) => {
		if (err) throw err;
		let dataArray = JSON.parse(data);
		console.log('dataArray', dataArray);
		dataArray.push(addedNoteJSON);
		console.log('updated dataArray', dataArray);
		
		let newDataString = JSON.stringify(dataArray);
		console.log(newDataString);

		fs.writeFile('./db/db.json', newDataString, function (err) {
			if (err) throw err;
			console.log('Saved!');
		});
	});
});


// ========== HTML ROUTES ==========

// return notes.html page
app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function (req, res) {
	res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// (catch all) return index.html
app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "./public/index.html"));
});


// ========== LISTEN ========== 

app.listen(PORT, () => {
	console.log(`Server is listening on ${PORT}.`)
}); 