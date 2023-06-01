const express = require("express");
const asyncHandler = require("express-async-handler");
const Production = require("../models/ProductionModels");

const productionRoute = express.Router();


productionRoute.get(
    // GET ALL PRODUCTION


  "/",
  asyncHandler(async (req, res) => {
    const productions = await Production.find({});
    res.json(productions);
  })
);
productionRoute.get(
    // GET PRODUCTION BY ID

    
    "/:id",
    asyncHandler(async (req, res) => {
      const production = await Production.findById(req.params.id);
      if(production){
        res.json(production);
      }
     
      else{
        res.status(404)
        throw new Error('production not found')
      }
    })
  );
module.exports = productionRoute;
