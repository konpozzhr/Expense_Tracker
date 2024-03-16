const mongoose = require('mongoose');


const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connect to database successfully\n`);
    }
    catch(err){
        console.log('Error connecting to database ', err);
    }
}


module.exports = connectDB;