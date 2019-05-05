import React, { Component } from 'react';
import Transaction from './Transaction';

class Transactions extends Component {
    render() {
        return (
            <div id="transactions">
                {this.props.transactions.map((t,i) => <Transaction key={i} transaction={t} />)}
            </div>
        );
    }
}

export default Transactions;