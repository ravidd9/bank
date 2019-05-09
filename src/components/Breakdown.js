import React, { Component } from 'react';

class Breakdown extends Component {


    setByCategories = () => {
        let categories = {}
        this.props.transactions.forEach(t => {
            if (categories[t.category]) {
                categories[t.category] += t.amount
            } else {
                categories[t.category] = t.amount
            }
        })
        return categories
    }

    render() {
        let categories = this.setByCategories()
        return (
            <div id="breakdown">
                <span>Category</span>
                <span>Amount</span>
                <div id="categories">
                    {Object.keys(categories).map(c => <div><span>{c}</span><span>{categories[c]}</span></div>)}
                </div>
            </div>
        );
    }
}

export default Breakdown;