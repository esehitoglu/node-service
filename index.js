const express = require('express')
const app = express()
const endPoint = require('./routes/api') //api.js import

app.use(express.json()); // body parser
app.use('/api',endPoint);

app.listen(3000,()=>{
    console.log('Server is running');
})