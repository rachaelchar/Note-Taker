const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}.`)
});


// ========== HTML ROUTES ==========

// return notes.html page
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "Develop/public/index.html"));
});

// (catch all) return index.html
app.get("*", function(req, res){
	res.sendFile(path.join(__dirname, "Develop/public/index.html"));
});