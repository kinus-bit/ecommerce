const mongoose = require("mongoose");

const orderSchema =  mongoose.Schema({
    //referencing user and product
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:[true,"user is required"],
        ref:"User"
    },
    // product:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     required:true,
    //     ref:"Product"
    // },
    quantity:{
        type:Number,
        required:true,
    }
},{
    timestamps:true,
});

module.exports = mongoose.model("Order",orderSchema);