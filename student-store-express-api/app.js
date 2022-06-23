const express = require('express')
const morgan = require('morgan')
const router = require("./routes/store")

const app = express()
app.use(morgan("tiny"))
app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requeseted-With, Content-Type, Accept");
    next()
})

app.use("/store", router)

app.get("/", async(req, res, next) => {
    try{
        res.status(200).json({ping: "pong"})
    }catch(err){
        next(err)
    }
})



module.exports = app