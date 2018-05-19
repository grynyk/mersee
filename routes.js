const express = require('express');
const router = express.Router();

const mainController = require('./controllers/main.controller');

module.exports = router;

router.get('/', mainController.getUsersFromDB);

router.get('/users', mainController.getUsersFromDB);

router.get('/users/:slug', mainController.getUsersFromDB);

router.get('/data', mainController.getDataFromDB);
router.post('/data/create', mainController.create);

router.get('/data/:slug', mainController.showSingle);