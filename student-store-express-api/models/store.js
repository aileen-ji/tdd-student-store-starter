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

function generateReceipt(purchase){
    let receipt = ["Showing receipt for " + purchase.user.name + " available at " + purchase.user.email + ":"]
    let amt = 0;
    purchase.shoppingCart.map((item) => {receipt.push(item.quantity + " total " + storage.get("products").find({id:item.itemId}).value().name +
    " purchased at a cost of $" + storage.get("products").find({id:item.itemId}).value().price + " for a total cost of $" + 
    (item.quantity * storage.get("products").find({id:item.itemId}).value().price).toFixed(2) + "."); 
    amt += item.quantity * storage.get("products").find({id:item.itemId}).value().price})
    receipt.push("Before taxes, the subtotal was $" + amt.toFixed(2))
    receipt.push("After taxes and fees were applied, the total comes out to $" + (amt*1.0875).toFixed(2))
    return receipt
}


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

class Store{
    static allProducts(){
        const products = storage.get("products")
        return products
    }

    static allPurchases(){
        const purchases = storage.get("purchases")
        return purchases
    }

    static fetchSingleProductById(productId){
        const product = storage.get("products").find({id:productId}).value()
        return product
    }

    static createPurchase(purchase){
        if(!purchase || !purchase.user || !purchase.shoppingCart){
            throw new BadRequestError("Missing user or shoppingCart")
        } 
        //user name or email is blank
        if(!purchase.user.name || !purchase.user.email){
            throw new BadRequestError("Enter valid name/email")
        }
        //quantity or id missing for shoppingCart items
        if(!checkIdAndQuantity(purchase.shoppingCart) || purchase.shoppingCart.length == 0){
            throw new BadRequestError("Invalid shoppingCart")
        }
        //duplicate items in shoppingCart
        if(checkIfDuplicateExists(Object.keys(purchase.shoppingCart))){
            throw new BadRequestError("Duplicate shoppingCart items")
        }
        const createdAt = new Date().toISOString()
        const newPurchase = {id: storage.get("purchases").value().length + 1, name:purchase.user.name, email:purchase.user.email, order:purchase.shoppingCart,
        total:calculateTotal(purchase.shoppingCart), createdAt: createdAt, receipt: generateReceipt(purchase)}
        storage.get("purchases").push(newPurchase).write()
        return newPurchase
    }
}

module.exports = Store