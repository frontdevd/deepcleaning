const express = require('express');
const authRoutes = require('./routes/auth');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use('/api/email', authRoutes);


module.exports = app;
