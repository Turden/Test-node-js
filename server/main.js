const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const controllers = require('./controllers')

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(port);
console.info("Server is started %s. %s",port,controllers.date);

