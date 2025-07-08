const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//importing the route
const productRoutes = require('./routes/productRoutes');

//connecting to mongodb
const MONGO_URI = "mongodb://localhost:27017/productdb";
const PORT = 6000;

const app = express();
app.use(cors());
app.use(express.json())

app.use('/products',productRoutes);

mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => console.log('MongoDB connected successfully,well done!'))
.catch(error => console.error('MongoDB error:',error));

app.listen(PORT,() =>{
    console.log(`server is running on http://localhost:${PORT}`);
});


