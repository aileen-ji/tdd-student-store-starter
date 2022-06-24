const express = require('express')
const router = express.Router()
const db = require("../data/db.json")
const {BadRequestError, NotFoundError} = require("../utils/errors")
const Store = require("../models/store")
const e = require('express')

router.use(express.json())


router.get("/", async(req, res, next) => {
    try{
    const allData = await Store.allProducts()
     res.status(200).json({products: allData})
    }catch(err){
      next(err)
    }
  }
)

router.get("/:productId", async(req, res, next) => {
    try{
        const productId = Number(req.params.productId)
        const singleProduct = await Store.fetchSingleProductById(productId)
        if(!singleProduct){
            throw new NotFoundError("No product found")
        }
        res.status(200).json({product: singleProduct})
    }catch(err){
        next(err)
    }
})

router.post("/", async(req, res, next) => {
    const emptyString = ""
    try{
            const newPurchase = req.body
            const purchase = await Store.createPurchase(newPurchase)
            res.status(201).json({purchase: purchase})
    }catch(err){
        next(err)
       }
})



module.exports = router