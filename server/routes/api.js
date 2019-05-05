
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Transaction = require('../models/Transaction')

router.get(`/transactions`, function(req, res){
    Transaction.find({}).exec((err, transactions) => {
        res.send(transactions) 
    })
})

router.post(`/transaction`, async function (req, res) {
    let body = req.body
    let t1 = new Transaction(body)
    await t1.save()
    res.send(t1)
})

module.exports = router