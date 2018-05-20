const express = require('express');
const router = express.Router();

const mainController = require('./controllers/main.controller');

module.exports = router;

router.get('/', mainController.showAuth);

router.get('/success', (req, res) => res.send("Welcome "+req.query.username+"!!"));
router.get('/error', (req, res) => res.send("error logging in"));

router.get('/users', mainController.getUsersFromDB);
router.get('/users/create', mainController.getUsersFromDB);
router.post('/users/create', mainController.getUsersFromDB);

router.get('/users/:slug', mainController.showSingle);

router.get('/data', mainController.getDataFromDB);
router.get('/data/:slug', mainController.showSingle);
router.get('/data/:slug/update', mainController.showUpdate);
router.post('/data/our/data/update', mainController.createUpdate);

router.get('/data/create', mainController.showCreate);
router.post('/data/create', mainController.createData);
