'use strict';

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();


let app = express();

app.use('/public', express.static(process.cwd() + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true } ));


app.route('/').get((req, res) => {
	res.sendFile(process.cwd() + '/views/index.html');
});





//404 Not Found Middleware
app.use((req, res, next) => {
	res.status(404).type('text').send('Not Found');
});


const port = process.env.PORT || 3200;

app.listen(port, () => {
	console.log('Listening on port...', port);
});





