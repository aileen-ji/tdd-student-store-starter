const {storage} = require("../data/storage")
const {BadRequestError} = require("../utils/errors")

function calculateTotal(shoppingCart){
    let amt = 0;
    const products = storage.get("products")
    shoppingCart.map((item)=>
        {
            amt += item.quantity * storage.get("products").find({id:item.itemId}).value().price
        }
    )
    amt *= 1.0875
    return amt.toFixed(2)
}


class Store{
    static allProducts(){
        const products = storage.get("products")
        return products
    }

    static fetchSingleProductById(productId){
        const product = storage.get("products").find({id:productId}).value()
        return product
    }

    static createPurchase(purchase){
        const createdAt = new Date().toISOString()
        const newPurchase = {id:storage.get("purchases").length, name:purchase.user.name, email:purchase.user.email, order:purchase.shoppingCart,
        total:calculateTotal(purchase.shoppingCart), createdAt: createdAt}
        storage.get("purchases").push(newPurchase).write()
        return newPurchase
    }
}

module.exports = Store