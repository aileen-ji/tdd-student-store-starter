const express = require('express')
const router = express.Router()
const db = require("../data/db.json")
const {BadRequestError} = require("../utils/errors")
const Store = require("../models/store")

router.use(express.json())

function checkIfDuplicateExists(arr) {
    return new Set(arr).size !== arr.length
}

router.get("/", async(req, res, next) => {
    try{
    const allData = Store.allProducts()
     res.status(200).json(allData)
    }catch(err){
      next(err)
    }
  }
)

router.get("/:productId", async(req, res, next) => {
    try{
        var productId = Number(req.params.productId)
        const singleProduct = Store.fetchSingleProductById(productId)
        res.status(200).json({product: singleProduct})
    }catch(err){
        next(err)
    }
})

router.post("/", async(req, res, next) => {
    try{
        //missing user or shoppingCart
        if(!req.body || !req.body.user || !req.body.shoppingCart){
            next(new BadRequestError)
        } 
        //quantity or id missing for shoppingCart items
        if(!req.body.shoppingCart.itemId || !req.body.shoppingCart.quantity){
            next(new BadRequestError)
        }
        //duplicate items in shoppingCart
        if(checkIfDuplicateExists(Object.keys(req.body.shoppingCart))){
            next(new BadRequestError)
        }
    }catch(err){
        next(err)
       }
})

module.exports = router