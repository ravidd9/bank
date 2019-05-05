
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Transaction = require('../models/Transaction')

router.get(`/transactions`, function(req, res){
    Transaction.find({}).exec((err, transactions) => {
        res.send(transactions) 
    })
})

router.post(`/transaction`, function (req, res) {
    let body = req.body
    let t1 = new Transaction(body)
    t1.save()
})

module.exports = router