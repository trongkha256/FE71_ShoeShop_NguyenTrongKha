import React, { Component } from 'react'
import ProductItem from './ProductItem'
import Modal from './Modal'
export default class ProductList extends Component {
    state = {
        selectedItem: [],
    }
    addCart = (product) => {
        let bool = 1;
        this.state.selectedItem.forEach((item) => {
            if (item === product) {
                bool = 0;
            }
        })
        if (bool === 1) {
            this.setState((state) => ({ selectedItem: [...state.selectedItem, product] }))
        }

    }
    render() {
        const { products } = this.props
        return (
            <div className='row'>
                {products.map((product) => {
                    return (
                        <div key={product.id} className="col-sm-4">
                            <ProductItem product={product} onchange={this.addCart} />
                        </div>
                    );
                })}
                <div className="d-flex justify-content-center mt-5">
                    <button
                        className="btn btn-dark"
                        data-bs-toggle="modal"
                        data-bs-target="#cart-modal"
                    >
                        Product Detail Store
                    </button>
                </div>
                < Modal detail={this.state.selectedItem} />
                {/* <div className='store' onClick={this.modal}>
                    <button type="button" className="btn btn-dark text-start mt-5 fs-5">Product Detail Store<i className="fa-solid fa-cart-flatbed mx-2"></i>
                    </button>

                </div> */}

            </div>
        )
    }
}
