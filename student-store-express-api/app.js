const express = require('express')
const morgan = require('morgan')
const db = require("./data/db.json")

const app = express()
app.use(morgan("tiny"))
app.use(express.json())

app.get("/", async(req, res, next) => {
    try{
        res.status(200).json({ping: "pong"})
    }catch(err){
        next(err)
    }
})

app.get("/store", async(req, res, next) => {
    try{
     res.status(200).json(db)
    }catch(err){
      next(err)
    }
  }
)

module.exports = app