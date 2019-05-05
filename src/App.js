import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Transactions from './components/Transactions';
import Operations from './components/Operations';
import axios from 'axios'
import Transaction from '../server/models/Transaction'


class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: await this.getTransactions()
    }
  }

  getBalance = () => {
    let sum = 0
    this.state.transactions.forEach(t => sum += parseInt(t.amount))
    return sum
  }

  getTransactions = async () => {return await axios.get(`http://localhost:8000/transections`)}

  addTransaction = async (operation, action) => {
    if (action == "withdraw") {
      operation.amount = (0 - operation.amount)
    }
    let transaction = new Transaction({
      amount: operation.amount,
      vendor: operation.vendor,
      category: operation.category
    })
    let transactions = await axios.post(`http://localhost:8000/transaction`, transaction, function () {
      console.log("transaction sent!")
    })

    this.setState({ transactions })
  }


  render() {
    return (
      <div>
        <p>balance: {this.getBalance()}</p>
        <Operations addTransaction={this.addTransaction} />
        <Transactions transactions={this.state.transactions} />
      </div>
    );
  }
}

export default App;
