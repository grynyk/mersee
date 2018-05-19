const express = require('express');
const router = express.Router();

const mainController = require('./controllers/main.controller');

module.exports = router;

router.get('/', mainController.getUsersFromDB);

router.get('/users', mainController.getUsersFromDB);
router.get('/users/create', mainController.getUsersFromDB);
router.post('/users/create', mainController.getUsersFromDB);

router.get('/users/:slug', mainController.showSingle);

router.get('/data', mainController.getDataFromDB);
router.get('/data/create', mainController.getDataFromDB);
router.post('/data/create', mainController.createData);

router.get('/data/:slug', mainController.showSingle);