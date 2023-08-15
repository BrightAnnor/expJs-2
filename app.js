const express = require('express');
const dotenv =require('dotenv');
const userRoute = require('./routes/userRoute');

// configure .dotenv
dotenv.config();

// express app
const app = express();

// userRouter
app.use('/',userRoute)

// port
const port = process.env.PORT || 2000;



app.listen(port,()=>{
    console.log(`Server is runinng on http://localhost:${port}`)
});
