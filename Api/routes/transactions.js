const express = require('express');
const router = express.Router();
const transactionsController = require('../controllers/transactionsController');

router.post('/transactions', transactionsController.createTransaction);
router.get('/transactions', transactionsController.getTransactions);
router.put('/transactions/:id', transactionsController.updateTransaction);
router.delete('/transactions/:id', transactionsController.deleteTransaction);

module.exports = router;
