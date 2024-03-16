const mongoose = require('mongoose');

const trxSchema = new mongoose.Schema({
    text: {
        type: String, 
        trim: true, 
        required: [true, "Please add some note "]
    }, 
    amount: {
        type: Number, 
        required: [true, "Please enter amount"]
    }, 
    createAt: {
        type: Date, 
        default: Date.now
    }
})



module.exports = mongoose.model('Transaction', trxSchema);