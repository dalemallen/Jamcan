import React from 'react';

function CartFormModal({ cart, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order submitted!');
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.4)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <form onSubmit={handleSubmit} style={{
        background: 'white',
        padding: 24,
        borderRadius: 8,
        width: 400,
        maxHeight: '80vh',
        overflowY: 'auto'
      }}>
        <h2>Order Details</h2>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} × {item.qty}
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 16 }}>
          <label>Name</label>
          <input required name="name" style={{ width: '100%' }} />
        </div>

        <div style={{ marginTop: 12 }}>
          <label>Email</label>
          <input type="email" required name="email" style={{ width: '100%' }} />
        </div>

        <div style={{ marginTop: 12 }}>
          <label>Phone</label>
          <input required name="phone" style={{ width: '100%' }} />
        </div>

        <div style={{ marginTop: 12 }}>
          <label>Notes</label>
          <textarea name="notes" style={{ width: '100%' }} rows={3}></textarea>
        </div>

        <div style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between' }}>
          <button type="button" onClick={onClose}>Cancel</button>
          <button type="submit">Submit Order</button>
        </div>
      </form>
    </div>
  );
}

export default CartFormModal;
