'use strict';

const app = require('./express/server');
// app.listen(3000, () => console.log('Local app listening on port 3000!'));

// var express = require('express')
// var app = express()
// app.get('/', function (req, res) {
//   res.send('hello world')
// })
app.listen(3000, () => console.log('Local app listening on port 3000!'));