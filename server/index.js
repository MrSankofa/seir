var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var axios = require('axios');
const Models = require('./Models.js');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 3007;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/items', (req, res) => {
    Models.psqlRetrieveAll(req, res);
})

app.get('/items/:id', (req, res) => {
    Models.psqlRetrieveOne(req, res);
})


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});


module.exports = app;