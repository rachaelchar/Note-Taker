const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve static files 
app.use(express.static(path.join(__dirname, 'Develop/public')));


// ========== HTML ROUTES ==========

// return notes.html page
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "Develop/public/index.html"));
});

app.get("/notes", function(req, res){
	res.sendFile(path.join(__dirname, "Develop/public/notes.html"));
});

// (catch all) return index.html
app.get("*", function(req, res){
	res.sendFile(path.join(__dirname, "Develop/public/index.html"));
});


// ========== API ROUTES ==========



// ========== LISTEN ==========

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}.`)
}); 