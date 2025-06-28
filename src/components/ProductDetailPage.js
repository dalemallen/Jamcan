import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';

function ProductDetailPage({ addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div style={{ padding: 32 }}><h2>Product not found</h2></div>;
  }

  return (
    <div style={{ padding: 32, maxWidth: 800, margin: 'auto' }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '100%', maxHeight: 300, objectFit: 'contain' }}
      />
      <h1>{product.name}</h1>
      <p>{product.size}</p>
      <p style={{ fontWeight: 'bold' }}>${product.price}</p>
      <p>🔥 Heat Level: {product.heat}</p>
      <p>🍍 Fruit Base: {product.fruit || 'None'}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductDetailPage;
