const express = require('express');
const trxRouter = express.Router();
const { getTransaction, addTransaction, deleteTransaction } = require('../controller/transactionController');

trxRouter.get('/test', (req, res) =>{
    res.send('transaction routes');
    console.log('transaction routes');
})

trxRouter.get('/viewTrx', getTransaction);
trxRouter.post('/add', addTransaction);
trxRouter.delete('/delete/:_id', deleteTransaction);

module.exports = trxRouter;