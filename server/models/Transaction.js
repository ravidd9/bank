
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    amount: Number,
    vendor: String,
    category: String
})

const Transaction = mongoose.model("Transaction", transactionSchema, "transactions")

// let t1 = new Transaction({
//     amount: 12,
//     category: "games",
//     vendor: "yoosi"
// })
// t1.save()


module.exports = Transaction