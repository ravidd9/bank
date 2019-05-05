import React, { Component } from 'react';

class Transaction extends Component {
    render() {
        let amount = this.props.transaction.amount
        return (
            <div className={`transaction ${amount > 0 ? "deposit" : "withdraw"}`}>
                <span className="amount">{amount}$</span>
                <span className="category">{this.props.transaction.category}</span>
                <span className="vendor">{this.props.transaction.vendor}</span>
            </div>
        );
    }
}

export default Transaction;