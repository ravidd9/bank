import React, { Component } from 'react';

class Transaction extends Component {
    render() {
        return (
            <div>
                <p>Amount: {this.props.transaction.amount}</p>
                <p>Vendor: {this.props.transaction.vendor}</p>
                <p>Category: {this.props.transaction.category}</p>
            </div>
        );
    }
}

export default Transaction;