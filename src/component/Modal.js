import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        const { detail } = this.props;
        return (
            <div
                className="modal fade"
                id="cart-modal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                The Detail Infomation of Products Added
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Mã sản phẩm</th>
                                        <th>Hình ảnh</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Giá</th>
                                        <th>Mô tả</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {detail.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td><img
                                                    src={item.image}
                                                    alt={item.alias}
                                                    width="50px"
                                                    height="50px"
                                                /></td>
                                                <td>{item.name}</td>
                                                <td>{item.price}</td>
                                                <td>{item.description}</td>

                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
