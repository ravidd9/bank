import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Transactions from './components/Transactions';
import Operations from './components/Operations';
import axios from 'axios'
import Breakdown from './components/Breakdown';


class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: []
    }
  }

  getBalance = () => {
    let sum = 0
    this.state.transactions.forEach(t => sum += parseInt(t.amount))
    return sum
    
  }

  componentDidMount = async () => {
    let transactions = await this.getTransactions()
    await this.setState({ transactions })
  }

  getTransactions = async () => {
    const transactions = await axios.get(`http://localhost:8000/transactions`)
    return transactions.data
  }

  createTransaction = (operation) =>{
    let transaction = {
      amount: operation.amount,
      vendor: operation.vendor,
      category: operation.category
    }
    return transaction
  }
  
  addTransaction = async (operation, action) => {
    if (action == "withdraw") {
      operation.amount = (0 - operation.amount)
    }

    let transaction = this.createTransaction(operation)
    await axios.post(`http://localhost:8000/transaction`, transaction)
    let transactions = await this.getTransactions()
    await this.setState({ transactions })
  }

  render() {
    let balance = this.getBalance()
    return (
      <div id="app">
        <div id="balance" className={`${balance > 0 ? "positive" : "negative"}`}>Balance:  {balance}$</div>
        <Transactions transactions={this.state.transactions} />
        <Operations addTransaction={this.addTransaction} balance={balance} />
        <Breakdown transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default App;
