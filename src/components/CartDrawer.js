
import React from 'react';

function CartDrawer({ cart, onClose, removeFromCart }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      right: 0,
      width: 300,
      height: '100vh',
      background: '#fff',
      boxShadow: '-2px 0 8px rgba(0,0,0,0.15)',
      padding: 16,
      zIndex: 1000
    }}>
      <h3>Your Cart</h3>
      <button onClick={onClose} style={{ float: 'right' }}>✖</button>
      <ul style={{ padding: 0, listStyle: 'none' }}>
        {cart.map(item => (
          <li key={item.id} style={{ marginBottom: 16 }}>
            <div><strong>{item.name}</strong> × {item.qty}</div>
            <div style={{ fontSize: 14, color: '#555' }}>${item.price} each</div>
            <button
              onClick={() => removeFromCart(item.id)}
              style={{
                marginTop: 6,
                padding: '2px 8px',
                fontSize: 12,
                background: '#fbb033',
                border: 'none',
                borderRadius: 4,
                cursor: 'pointer'
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {cart.length === 0 && <p>No items in cart.</p>}
    </div>
  );
}

export default CartDrawer;
