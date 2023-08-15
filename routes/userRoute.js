const express = require('express');
const {aboutUs, homePage} = require('../controllers/userController')

// extending express server
const app = express.Router();

app.get('/',homePage);
app.get('/about-us',aboutUs)

module.exports = app;
