import React, { useState } from 'react';
import productsData from '../data/products'; // ✅ import your product data
import ProductFilters from './ProductFilters'; // ✅ import filter component
import ProductCard from './ProductCard'; // ✅ import card component

function ProductList({ cart, addToCart, openOrderForm }) {
  const [filters, setFilters] = useState({ heat: [], fruit: '' });

  const filteredProducts = productsData.filter(p =>
    (filters.heat.length === 0 || filters.heat.includes(p.heat)) &&
    (!filters.fruit || p.fruit === filters.fruit)
  );

  return (
    <div style={{ padding: 32 }}>
      <ProductFilters filters={filters} setFilters={setFilters} />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24,
        marginTop: 16
      }}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      {cart.length > 0 && (
        <div style={{ marginTop: 32 }}>
          <button onClick={openOrderForm}>
            Order Now ({cart.reduce((a, c) => a + c.qty, 0)} items)
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductList;
