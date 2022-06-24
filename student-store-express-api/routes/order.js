const express = require('express')
const orderRouter = express.Router()
const {BadRequestError, NotFoundError} = require("../utils/errors")
const Order = require("../models/order")

orderRouter.use(express.json())

orderRouter.get("/", async(req, res, next)=>{
    try{
        const allData = await Order.allPurchases()
         res.status(200).json({purchases: allData})
        }catch(err){
          next(err)
        }
})

orderRouter.get("/:purchaseId", async(req, res, next) => {
    try{
        const purchaseId = Number(req.params.purchaseId)
        const singlePurchase = await Order.fetchSinglePurchaseById(purchaseId)
        if(!singlePurchase){
            throw new NotFoundError("No purchase found")
        }
        res.status(200).json({purchase: singlePurchase})
    }catch(err){
        next(err)
    }
})

module.exports = orderRouter