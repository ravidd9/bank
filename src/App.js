import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Transactions from './components/Transactions';
import Operations from './components/Operations';
import axios from 'axios'


class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [],
      balance: 0
    }
  }

  getBalance = () => {
    let sum = 0
    this.state.transactions.forEach(t => sum += parseInt(t.amount))
    return sum
  }

  componentDidMount = async () => {
    let transactions = await this.getTranscations()
    this.setState({ transactions })
    const balance = this.getBalance()
    this.setState({ balance })
  }

  getTranscations = async () => {
    const transactions = await axios.get(`http://localhost:8000/transactions`)
    const balance = this.getBalance()
    this.setState({ balance })
    return transactions.data
  }


  addTransaction = async (operation, action) => {
    if (action == "withdraw") {
      operation.amount = (0 - operation.amount)
    }

    let transaction = {
      amount: operation.amount,
      vendor: operation.vendor,
      category: operation.category
    }

    await axios.post(`http://localhost:8000/transaction`, transaction)
    let transactions = await this.getTranscations()
    console.log(transactions)
    this.setState({ transactions })
  }


  render() {
    let balance = this.state.balance
    return (
      <div id="app">
        <div id="balance" className={`${balance > 0 ? "positive" : "negative"}`}>Balance:  {balance}$</div>
        <Operations addTransaction={this.addTransaction} />
        <Transactions transactions={this.state.transactions} />
      </div>
    );
  }
}

export default App;
