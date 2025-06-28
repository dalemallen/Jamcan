import React from 'react';

function ProductFilters({ filters, setFilters }) {
  const toggleHeat = (level) => {
    const updated = filters.heat.includes(level)
      ? filters.heat.filter(h => h !== level)
      : [...filters.heat, level];
    setFilters({ ...filters, heat: updated });
  };

  const handleFruitChange = (e) => {
    setFilters({ ...filters, fruit: e.target.value });
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      padding: '16px 0',
      flexWrap: 'wrap'
    }}>
      <div style={{ display: 'flex', gap: 8 }}>
        {['Mild', 'Medium', 'Hot'].map((level) => (
          <button
            key={level}
            onClick={() => toggleHeat(level)}
            style={{
              padding: '8px 12px',
              borderRadius: 6,
              border: '1px solid #ccc',
              backgroundColor: filters.heat.includes(level) ? '#fbb033' : '#fff',
              cursor: 'pointer'
            }}
          >
            {level}
          </button>
        ))}
      </div>

      <select onChange={handleFruitChange} value={filters.fruit} style={{ padding: 8, borderRadius: 6 }}>
        <option value="">All Fruits</option>
        <option value="Pineapple">Pineapple</option>
        <option value="Mango">Mango</option>
        <option value="Lemon">Lemon</option>
      </select>
    </div>
  );
}

export default ProductFilters;
