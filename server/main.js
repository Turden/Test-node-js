const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();
const port = 3000;
const myDate = new Date();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(port);
console.info("Server is started %s. Data %s",port,myDate);

