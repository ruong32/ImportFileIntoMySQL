const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const initRoutes = require('./routes/routes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/Public`));

initRoutes(app);

http.createServer(app).listen(5678, 'localhost', () => {
  console.log(`Listening on ${5678}`);
});
