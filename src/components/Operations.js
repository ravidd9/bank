import React, { Component } from 'react';

class Operations extends Component {
    constructor(){
        super()
        this.state ={
            amount: 0,
            vendor: "",
            category: ""
        }
    }

    deposit = () => this.props.addTransaction(this.state, "deposit")
    
    withdraw = () => this.props.addTransaction(this.state, "withdraw")

    changeValue = event => this.setState({[event.target.id]: event.target.value})

    render() {
        return (
            <div>
                <input type="number" placeholder="ENTER AMOUNT" id="amount" value={this.state.amount} onChange={this.changeValue}/>
                <input type="text" placeholder="ENTER VENDOR" id="vendor" value={this.state.vendor} onChange={this.changeValue}/>
                <input type="text" placeholder="ENTER CATEGORY" id="category" value={this.state.category} onChange={this.changeValue}/>
                <button onClick={this.deposit} >Deposit</button>
                <button onClick={this.withdraw} >Withdraw</button>
            </div>
        );
    }
}

export default Operations;