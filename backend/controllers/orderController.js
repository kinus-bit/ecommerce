const Order = require("../models/order");
const { modelName } = require("../models/Product");

//creating an order
exports.createOrder = async (req, res) => {
  try {
    //data from user
    const {user,product,quantity} = req.body;
    if(!user || !product || !quantity ){
      return res.status(400).json({message:"All fields are required!!!"})
    }

    const order = await Order.create({user,product,quantity});
    if(order){
      res.status(201).json({
        name: order.user,
        productName:order.product,
        QuantityOrdered:order.quantity
      })
    }
    // await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: "Failed to create an order" });
  }
};

//getting all created orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.Find();
    if(!orders){
        return res.status(404).json({message: "No product found!"})
    }
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ message: "Failed to get products" });
  }
};
 