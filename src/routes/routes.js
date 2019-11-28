const express = require('express');
const path = require('path');

const controller = require('./../controllers/controllers');

const router = express.Router();

const initRoutes = app => {
  router.get('/', (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/index.html`));
  });
  router.post('/upload', controller.uploadFile);
  router.post('/find', controller.find);
  router.post('/update', controller.update);
  router.post('/delete', controller.del);
  return app.use('/', router);
};

module.exports = initRoutes;
