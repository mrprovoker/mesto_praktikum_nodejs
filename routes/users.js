const express = require('express');

const UsersController = require('../controllers/users');

const router = express.Router();

router
  .get('/', UsersController.asHandler('getUsers'))
  .get('/:id', UsersController.asHandler('getUser'));

module.exports = router;
