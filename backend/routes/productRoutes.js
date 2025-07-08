const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

//creating a product
router.post('/',async(req,res) =>{
    try{
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    }catch(error){
        res.status(400).send(error)
    }
});

//reading all
router.get('/',async(req,res) =>{
    const product = await Product.find();
    res.send(product);
});

module.exports = router;



