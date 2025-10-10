const express = require("express");
const router = express.Router();
const { createOrder , getAllOrders} = require("../controllers/orderController");


//getting orders
router.get("/getAll",getAllOrders);

//creating a new order
router.post("/create",createOrder);

module.exports = router;

