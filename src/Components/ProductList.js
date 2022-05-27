import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="row">
        {this.props.products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              product={product}
              onSelect={this.props.onSelect}
            />
          );
        })}
      </div>
    );
  }
}
