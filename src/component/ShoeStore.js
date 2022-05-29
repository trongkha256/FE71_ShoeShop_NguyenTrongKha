import React, { Component } from 'react'
import ProductList from './ProductList'
// import Modal from './Modal'
import data from "./data.json"

export default class ShoeStore extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center">Shoes Shop</h1>
                <ProductList products={data} />
            </div>
        )
    }
}
