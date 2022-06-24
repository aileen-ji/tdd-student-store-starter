const {storage} = require("../data/storage")

class Order{
    static allPurchases(){
        const purchases = storage.get("purchases")
        return purchases
    }

    static fetchSinglePurchaseById(purchaseId){
        const purchase = storage.get("purchases").find({id:purchaseId}).value()
        return purchase
    }
}

module.exports = Order