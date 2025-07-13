require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//importing the route
const productRoutes = require('./routes/productRoutes');

//connecting to mongodb


const app = express();
app.use(cors());
app.use(express.json())

app.use('/products',productRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected successfully,well done!'))
.catch(error => console.error('MongoDB error:',error));


const PORT = process.env.PORT || 6000;

app.listen(PORT,() =>{
    console.log(`server is running on http://localhost:${PORT}`);
});



