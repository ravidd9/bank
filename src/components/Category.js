import React, { Component } from 'react';

class Category extends Component {

    getVendors = () => {
        let vendors = []
        this.props.transactions.forEach(t => {
            if (t.category == this.props.category) {
                vendors.push(t.vendor)
            }
        })
        return vendors
    }

    render() {
        let vendors = this.getVendors()
        return (
            <div>
                {vendors.map((v, i) => <span key={i}>{v}, </span>)}
            </div>
        );
    }
}

export default Category;