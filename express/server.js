'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth')

const router = express.Router();
console.log("Started");

app.use(basicAuth({
  challenge: true,
  users: { 'admin': 'supersecret' }
}));

// router.get('*', (req, res) => {
//   res.sendFile("index.html", { root: __dirname+"/../build/" });
// });
router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use(express.static(__dirname + "/../build"));
app.use('/',router);
app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
