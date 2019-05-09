import React, { Component } from 'react';

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: 0,
            vendor: "",
            category: "",
            insufficientFunds: ""
        }
    }

    checkIfInsufficientFunds = () => {
        if (this.props.balance - this.state.amount < 500) {
            this.setState({ insufficientFunds: "Insufficient Funds" })
        } else {
            this.setState({ insufficientFunds: "" })
            this.withdraw()
        }
    }

    deposit = () => this.props.addTransaction(this.state, "deposit")


    withdraw = () => this.props.addTransaction(this.state, "withdraw")

    changeValue = event => this.setState({ [event.target.id]: event.target.value })

    render() {
        return (
            <div id="operations">
                <div id="enter">Enter Operation</div>
                <input type="number" placeholder="ENTER AMOUNT" id="amount" value={this.state.amount} onChange={this.changeValue} />
                <input type="text" placeholder="ENTER VENDOR" id="vendor" value={this.state.vendor} onChange={this.changeValue} />
                <input type="text" placeholder="ENTER CATEGORY" id="category" value={this.state.category} onChange={this.changeValue} />
                <div id="buttons">
                    <button id="deposit" onClick={this.deposit} >Deposit</button>
                    <button id="withdraw" onClick={this.checkIfInsufficientFunds} >Withdraw</button>
                    <div id="below500">{this.state.insufficientFunds}</div>
                </div>
            </div>
        );
    }
}

export default Operations;