import React, { Component } from 'react';
import Category from './Category';

class Breakdown extends Component {
    constructor(){
        super()
        this.state = {
            category: []
        }
    }


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

    expandCategory = () =>{
        
    }

    render() {
        let categories = this.setByCategories()
        return (
            <div id="breakdown">
                <span>Category</span>
                <span>Amount</span>
                <div>
                    {Object.keys(categories).map((c,i) =>
                        <div key={i} className="categories" onMouseOver={this.expandCategory}>
                            <span>{c}</span>
                            <Category category={c} transactions={this.props.transactions}/>
                            <span
                                className={categories[c] > 0 ?
                                    "positive" :
                                    "negative"}
                            >   {categories[c]}</span>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Breakdown;