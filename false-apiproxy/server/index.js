const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();

// routes
app.get('/api', require('../routes'));

// cors
app.use(cors);

// run server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))