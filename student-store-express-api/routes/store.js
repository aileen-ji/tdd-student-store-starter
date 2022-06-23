const express = require('express')
const router = express.Router()
const db = require("../data/db.json")
const {BadRequestError, NotFoundError} = require("../utils/errors")
const Store = require("../models/store")

router.use(express.json())

function checkIfDuplicateExists(arr) {
    return new Set(arr).size !== arr.length
}

function checkIdAndQuantity(arr) {
    let a = 0
    arr.map((item) => Object.keys(item).length != 2 ? a++ : null)
    if(a > 0){
        return false;
    }
    return true
}

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
    try{
        //missing user or shoppingCart
        if(!req.body || !req.body.user || !req.body.shoppingCart){
            next(new BadRequestError("1"))
        } 
        //quantity or id missing for shoppingCart items
        if(!checkIdAndQuantity(req.body.shoppingCart)){
            next(new BadRequestError("2"))
        }
        //duplicate items in shoppingCart
        if(checkIfDuplicateExists(Object.keys(req.body.shoppingCart))){
            next(new BadRequestError("3"))
        }
        const newPurchase = req.body
        const purchase = await Store.createPurchase(newPurchase)
        res.status(201).json({purchase: purchase})
    }catch(err){
        next(err)
       }
})

module.exports = router