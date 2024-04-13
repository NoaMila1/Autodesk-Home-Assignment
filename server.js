require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes'); 

app.use('/', routes); 

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log(`Server running on http://localhost:${port}`);
});
