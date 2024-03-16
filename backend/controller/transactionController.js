const Transaction = require('../model/transactionModel');

exports.getTransaction = async (req, res, next) => {
//   res.send('GET transaction');
    try{
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true, 
            count: transactions.length,
            message: "Transaction found",
            object: transactions,
            
        }), 
        console.log(`\n${res.statusCode} : ${res.statusMessage} \nTransaction found ${transactions.length}\n${transactions}`);
    }catch(err){
        return res.status(500).json({
            success: false, 
            error: "Server Error", 
            message: err
        }),
        console.log(`${res.statusCode} : ${res.statusMessage} \nError view transaction`, err);
    }
}


exports.addTransaction = async (req, res, next) =>{
    // res.send('POST transaction');
    try{
        const { text, amount } = req.body;

        const transaction = await Transaction.create({text, amount});
        return res.status(201).json({
            success: true,
            message: "Transaction added successfully",
            object: transaction
        }),
        console.log(`\n${res.statusCode} : ${res.statusMessage} \nTransaction added successfully\n${transaction}`);
    }
    catch(err){
        return res.status(500).json({
            success: false, 
            error: "Error adding transaction", 
            message: err
        }),
        console.log(`${res.statusCode} : ${res.statusMessage} \nError adding transaction\n`, err);
    }
}

exports.deleteTransaction = async (req, res, next) =>{
    // res.send('DELETE transaction ');
    try{
        const transaction = await Transaction.findOne(req.params);


        if(!transaction){
            return res.status(404).json({
                success: false,
                message: "Transaction not found", 
            }), 
            console.log(`${res.statusCode} : ${res.statusMessage} \nTransaction not found\n`);
        }
        // await transaction.remove();
        await Transaction.deleteOne(transaction);
        res.status(200).json({
            success: true, 
            message: "Transaction deleted successfully", 
            object: transaction,
        }),
        console.log(`\n${res.statusCode} : ${res.statusMessage} \nTransaction deleted successfully\n${transaction}`);
    
    }catch(err){
        return res.status(500).json({
            success: false, 
            error: "Error delete transaction", 
            message: err
        }),
        console.log(`${res.statusCode} : ${res.statusMessage} \nError delete transaction\n`, err);
    }
}