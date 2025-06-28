import React from 'react';
import ProductList from '../components/ProductList';

function Products({ cart, addToCart, openOrderForm }) {
  return (
    <ProductList cart={cart} addToCart={addToCart} openOrderForm={openOrderForm} />
  );
}

export default Products;
