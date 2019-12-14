const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const db = require("./db/db.json");
const fs = require("fs");

const id = Math.floor(Math.random() * 100);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve static files 
app.use(express.static(path.join(__dirname, './public')));


// ========== API ROUTES ==========
app.get("/api/notes", function(req, res){
	// res.send(path.join(__dirname, './Develop/db/db.json'))
	res.json("It worked!");
});

app.post("/api/notes", function(req, res){

	let addedNote = JSON.stringify(req.body);
	addedNote = '{' + `"id":${id},` + addedNote.substr(1);
	console.log(addedNote);

	// potentially use readfile first?

	// Try to start at 1 and automatically increment id -- must be unique

	fs.appendFile('./db/db.json', addedNote, function (err) {
		if (err) throw err;
		console.log('Saved!');
	  });


});


// ========== HTML ROUTES ==========

// return notes.html page
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function(req, res){
	res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// (catch all) return index.html
app.get("*", function(req, res){
	res.sendFile(path.join(__dirname, "./public/index.html"));
});


// ========== LISTEN ========== 

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}.`)
}); 