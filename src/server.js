const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());

router.get('/', (req, res) => {
  res.json({hello: 'Express!'});
});

router.get('/another', (req, res) => {
  res.json({route: req.originalUrl});
});

router.post('/', (req, res) => {
  res.json({reqBody: req.body})
});

app.use('/.netlify/functions/server', router);

module.exports = app;
module.exports.handler = serverless(app);





