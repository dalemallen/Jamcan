function ProductCard({ product, addToCart }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: 8,
      padding: 12,
      textAlign: 'center'
    }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '100%', height: 160, objectFit: 'contain' }}
      />
      <h4>{product.name}</h4>
      <p>{product.size}</p>
      <p style={{ fontWeight: 'bold' }}>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;