import React, { Component } from "react";
import ProductList from "./ProductList";
import data from "./data.json";
import ModalItemDetail from "./ModalItemDetail";
import ModalCart from "./ModalCart";
export default class ShoesShop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProduct: {},
      carts: [],
      totalPrice: 0,
    };
  }
  handleSelect = (product) => {
    this.setState({ ...this.state, selectedProduct: product });
  };
  handleAddToCart = (product) => {
    const index = this.state.carts.findIndex((cart) => cart.id === product.id);
    if (index === -1) {
      const carts = [...this.state.carts, { ...product, amount: 1 }];
      const totalPrice = this.handleTotalPrice(carts);
      return this.setState({ ...this.state, carts, totalPrice });
    } else {
      const carts = [...this.state.carts];
      carts[index].amount += 1;
      const totalPrice = this.handleTotalPrice(carts);
      return this.setState({ ...this.state, carts, totalPrice });
    }
  };
  handleDelete = (productId) => {
    const carts = this.state.carts.filter((cart) => cart.id !== productId);
    const totalPrice = this.handleTotalPrice(carts);
    this.setState({ ...this.state, carts, totalPrice });
  };
  handleChangeQuantity = (productId, value) => {
    const carts = this.state.carts.map((cart) => {
      if (cart.id === productId) {
        return { ...cart, amount: cart.amount + value };
      }
      return cart;
    });
    const totalPrice = this.handleTotalPrice(carts);
    this.setState({ ...this.state, carts, totalPrice });
  };
  handleTotalPrice = (carts) => {
    return carts.reduce((total, cart) => {
      return total + cart.amount * cart.price;
    }, 0);
  };
  render() {
    return (
      <div className="bg-dark">
        <h1 className="text-center text-light py-4 bg-black bg-opacity-50">
          Shoes Shop
        </h1>
        <div className="container">
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-light"
              data-bs-toggle="modal"
              data-bs-target="#cartModal"
            >
              Cart
            </button>
          </div>
          <ProductList
            products={data}
            onSelect={this.handleSelect}
            onAddToCart={this.handleAddToCart}
          />
        </div>
        <ModalItemDetail onSelectedProduct={this.state.selectedProduct} />
        <ModalCart
          carts={this.state.carts}
          onDelete={this.handleDelete}
          onChangeQuantity={this.handleChangeQuantity}
          totalPrice={this.state.totalPrice}
        />
      </div>
    );
  }
}
