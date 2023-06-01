const express = require("express");
const {createproductions} = require('../Controllers/ProductionController')
const postRoute = express.Router();


postRoute.post('/createProduction',createproductions)


module.exports = postRoute