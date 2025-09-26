const { request } = require("express");
const Product = require("../models/Product");

//getting all the products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Product Not found", error: error.message });
  }
};

//creating a product
exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

//update product
exports.updateProduct = async (req, res) => {
  try {
    
    const updatePro = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    const product = await Product.findById(req.params.id);
   
     if (!product) {
      return res.status(404).json({ message: "product not found" });
    }

    res.json(updatePro);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//deleting a product

exports.deleteProduct = async (req, res) => {
  try {
   
     await Product.findByIdAndDelete(req.params.id);
     const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }
    res.json({ message: "Product deleted successfuly" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
