const  mongoose =require('mongoose');

const productSchema = new mongoose.Schema({
    productUrl:{type:String,required:true},
    productName:{type:String,required:true},
    productDescription:{type:String,required:true},
    productPrice:{type:Number,required:true},
});

module.exports = mongoose.model('Product',productSchema);