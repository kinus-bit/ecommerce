const express = require("express");
const router = express.Router();
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

//creating a product
router.post("/create", createProduct);

//reading all
router.get("/all", getProducts);

//updating a product
router.put("/update/:id", updateProduct);

//deleting a product
router.delete("/delete/:id", deleteProduct);

module.exports = router;
