const db = require("../data/db.json")
const {BadRequestError} = require("../utils/errors")

class Store{
    static allProducts(){
        return db;
    }

    static fetchSingleProductById(productId){
        if(productId < 1 || productId > db.products.length){
            throw new BadRequestError
        }
        return db.products[productId - 1]
    }

    static createPurchase(){
        
    }
}

module.exports = Store