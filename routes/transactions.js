const express = require('express');
const { getTransactions } = require('../controllers/transactions');
const router = express.Router();
cosnt { getTransactions } = require('../controllers/transactions');

router
  .get('/')
  .get(getTransactions);

module.exports = router;
