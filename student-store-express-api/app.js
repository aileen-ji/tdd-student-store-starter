const express = require('express')
const morgan = require('morgan')
const router = require("./routes/store")
const orderRouter = require("./routes/order")
const {NotFoundError} = require("./utils/errors")

const app = express()
app.use(morgan("tiny"))
app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requeseted-With, Content-Type, Accept");
    next()
})

app.use("/store", router)

app.use("/orders", orderRouter)

app.get("/", async(req, res, next) => {
    try{
        res.status(200).json({ping: "pong"})
    }catch(err){
        next(err)
    }
})

//404 error handling middleware
app.use((req, res, next) => {
    return next(new NotFoundError())
   })
  
   //generic error handler
   app.use((error, req, res, next) => {
    return res.status(error.status || 500).json({
      error: {message: error.message || "Something went wrong in the application", status: error.status || 500}
    })
   })

module.exports = app