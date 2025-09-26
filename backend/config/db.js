const mongoose = require('mongoose');

// exports.connectDB = async () =>{
//     try {
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log("Mongodb connected successfully");
        
//     } catch (error) {
//         console.error("Mongodb connection failed:",error.message); 
//         process.exit(1);
//     }
// }

let MONGO_URI = "mongodb://localhost:27017/productdb";

exports.connectDB = async () =>{
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Mongodb connected successfully");
        
    } catch (error) {
        console.error("Mongodb connection failed:",error.message); 
        process.exit(1);
    }
}

