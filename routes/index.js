const express = require('express');

const cardsRoutes = require('./cards');
const usersRoutes = require('./users');

const router = express.Router();

router
  .use('/users', usersRoutes)
  .use('/cards', cardsRoutes)
  .use('*', (req, res) => res.status(404).send({
    message: 'Запрашиваемый ресурс не найден'
  }));

module.exports = router;
