const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

APP.use(EXPRESS.urlencoded({ extended: true }));
APP.use(EXPRESS.json());

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}.`)
});