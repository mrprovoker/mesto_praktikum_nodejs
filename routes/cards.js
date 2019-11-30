const express = require('express');

const CardsController = require('../controllers/cards');

const router = express.Router();

router.get('/', CardsController.asHandler('getCards'));

module.exports = router;
