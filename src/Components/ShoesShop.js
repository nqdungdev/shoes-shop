import React, { Component } from "react";
import ProductList from "./ProductList";
import data from "./data.json";
import ModalItemDetail from "./ModalItemDetail";
export default class ShoesShop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProduct: {},
    };
  }
  handleSelect = (product) => {
    this.setState({ selectedProduct: product });
  };
  render() {
    return (
      <div className="bg-dark">
        <h1 className="text-center text-light py-4 bg-black bg-opacity-50">
          Shoes Shop
        </h1>
        <div className="container">
          <ProductList products={data} onSelect={this.handleSelect} />
        </div>
        <ModalItemDetail onSelectedProduct={this.state.selectedProduct} />
      </div>
    );
  }
}
