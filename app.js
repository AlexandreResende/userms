
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const app = express();
const port = process.env.PORT || 3000;

app
  .use(helmet())
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  })
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .listen(port, () => console.log(`Server running on port ${port}`));