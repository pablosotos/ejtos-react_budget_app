import React, { useState } from 'react';

const currencyOptions = [
  { label: '$ Dollar', value: '$' },
  { label: '£ Pound', value: '£' },
  { label: '€ Euro', value: '€' },
  { label: '₹ Rupee', value: '₹' },
];

const CurrencyDropdown = ({ selectedCurrency, onCurrencyChange }) => {
  const handleCurrencyChange = (event) => {
    onCurrencyChange(event.target.value);
  };

  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text">Currency</span>
      </div>
      <select
        className='custom-select currency-dropdown'
        value={selectedCurrency}
        onChange={handleCurrencyChange}
      >
        {currencyOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyDropdown;
