import React, { Component } from 'react'
export default class ProductItem extends Component {
    render() {
        const { product, onchange } = this.props
        return (
            <div className="card">
                <img src={product.image} alt={product.name} />
                <div className="card-body">
                    <h4 className="card-title text-start">
                        {product.name}
                    </h4>
                    <p className="card-text text-start">
                        {product.price}
                    </p>
                    <div className="button text-start" onClick={() => onchange(product)}>
                        <button type="button" className="btn btn-dark text-start">Add Carts
                            <i className="fa-solid fa-cart-plus mx-2"></i></button>
                    </div>

                </div>

            </div >

        )

    }
}
