const express = require('express');
const trxRouter = express.Router();
const { getTransaction, addTransaction } = require('../controller/transactionController');

trxRouter.get('/test', (req, res) =>{
    res.send('transaction routes');
    console.log('transaction routes');
})

trxRouter.get('/viewTrx', getTransaction);
trxRouter.post('/add', addTransaction);

module.exports = trxRouter;