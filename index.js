const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());


//Import Routes
const authRoute = require('./routes/auth');


dotenv.config({ path: './routes/.env' });


//Connect DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => 
    console.log('Connected To MongoDB Database...')
);


// Middleware
app.use(express.json());


//Route Middlewares
app.use('/api/user', authRoute);

app.listen(8000, () => console.log('Sever is running on Port: 8000'));


