const express = require('express');
const cors = require('cors');

const app = express();
const  PORT = 3002;

app.use(cors());
app.use(express.json())

// API routes - Posts
app.use('/users', require('./routes/users'))

// Server
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})