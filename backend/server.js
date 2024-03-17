
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const trxRouter = require('./routes/transactionRouter');
const cors = require('cors');
const connectDB = require('./config/database');






const app = express();
dotenv.config({
    path: './config/.env'
})

connectDB();

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true, 
}));

app.use(express.json());
app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}\n`)
);

app.get('/', (req, res) => {
    res.send('testing route');
    console.log('testing route');
})


app.use('/api/v1/transaction', trxRouter);

